import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectorRef,
  EventEmitter
} from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { SortTypeEnum } from 'src/app/models/SearchRequestModel';
import { SearchEvent } from 'src/app/models/EventModels';

@Component({
  selector: 'app-search-region',
  templateUrl: './search-region.component.html',
  styleUrls: ['./search-region.component.scss']
})
export class SearchRegionComponent implements OnInit {
  searchName = '';
  sortType = SortTypeEnum.None;
  @Input() merchandiseList = new Array<MerchandiseViewModel>();
  @Output() RenewListBySearching = new EventEmitter<SearchEvent>();
  @Output() Sort = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  SortByPrice() {
    this.sortType = SortTypeEnum.Price;
    this.Search();
  }

  SortBySoldQty() {
    this.sortType = SortTypeEnum.SoldQty;
    this.Search();
  }

  Search() {
    const searchEvent = new SearchEvent(this.searchName, this.sortType);

    this.RenewListBySearching.emit(searchEvent);
  }
}
