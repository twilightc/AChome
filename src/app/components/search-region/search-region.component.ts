import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectorRef,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { SortTypeEnum, OrderTypeEnum } from 'src/app/models/SearchRequestModel';
import { SearchEvent } from 'src/app/models/EventModels';
import { of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-region',
  templateUrl: './search-region.component.html',
  styleUrls: ['./search-region.component.scss']
})
export class SearchRegionComponent implements OnInit, OnDestroy {
  SortTypeEnum = SortTypeEnum;
  OrderTypeEnum = OrderTypeEnum;
  searchName = '';
  sortType = SortTypeEnum.None;
  orderType = OrderTypeEnum.None;

  @Input() merchandiseList = new Array<MerchandiseViewModel>();
  @Output() RenewListBySearching = new EventEmitter<SearchEvent>();
  // @Output() Sort = new EventEmitter<number>();
  searchCommand = new BehaviorSubject<SearchEvent>(
    new SearchEvent(this.searchName, SortTypeEnum.None, OrderTypeEnum.None)
  );

  constructor(private activateroute: ActivatedRoute) {}

  ngOnInit() {
    this.activateroute.paramMap
      .pipe(
        switchMap(params =>
          of([
            params.get('SortType'),
            params.get('Keyword'),
            params.get('OrderType')
          ])
        )
      )
      .subscribe(data => {
        this.sortType = SortTypeEnum[data[0]];
        this.searchName = data[1];
        this.orderType = OrderTypeEnum[data[2]];

        this.searchCommand.next(
          new SearchEvent(this.searchName, +data[0], +data[2])
        );
      });
    this.searchCommand.subscribe(result => {
      this.RenewListBySearching.emit(result);
    });
  }

  ngOnDestroy(): void {
    this.searchCommand.unsubscribe();
  }

  SortBy(SortType: SortTypeEnum) {
    this.searchCommand.next(
      new SearchEvent(
        this.searchCommand.value.searchName,
        SortType,
        this.searchCommand.value.orderType
      )
    );
  }

  OrderBy(OrderType: OrderTypeEnum) {
    this.searchCommand.next(
      new SearchEvent(
        this.searchCommand.value.searchName,
        this.searchCommand.value.sortType,
        OrderType
      )
    );
  }

  Search() {
    this.searchCommand.next(
      new SearchEvent(
        this.searchName,
        this.searchCommand.value.sortType,
        this.searchCommand.value.orderType
      )
    );
  }
}
