import { Component, OnInit, OnDestroy } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import {
  MerchandiseViewModel,
  MerchandiseWrapper
} from 'src/app/models/CategoryListViewModel';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  SearchRequestModel,
  SortTypeEnum,
  OrderTypeEnum
} from 'src/app/models/SearchRequestModel';
import { SearchEvent } from 'src/app/models/EventModels';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  paginator: MatPaginator;
  merchandiseWrapper = new MerchandiseWrapper();
  searchRequestModel = new SearchRequestModel();

  constructor(
    private merchandiseservice: MerchandiseService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.searchRequestModel.PageIndex = 1;
    this.searchRequestModel.PageSize = 10;
    this.activateroute.paramMap
      .pipe(
        switchMap(params =>
          of([
            params.get('Cid'),
            params.get('DetailId'),
            params.get('SortType'),
            params.get('Keyword'),
            params.get('OrderType')
          ])
        )
      )
      .subscribe(data => {
        console.log('999', data);

        this.searchRequestModel.CategoryId = data[0];
        this.searchRequestModel.CategoryDetailId = data[1];
        this.searchRequestModel.SortType = +data[2];
        this.searchRequestModel.Keyword = data[3];
        this.searchRequestModel.PageIndex = 1;
        this.searchRequestModel.OrderType = +data[4];
        this.getMerchandises();
      });
  }

  pageChange(pageEvent: PageEvent) {
    // console.log(pageEvent);
    this.searchRequestModel.PageIndex = pageEvent.pageIndex + 1;
    this.searchRequestModel.PageSize = pageEvent.pageSize;
    this.getMerchandises();
  }

  getMerchandises() {
    // console.log('this.searchRequestModel:', this.searchRequestModel);

    this.merchandiseservice
      .GetMerchandiseListBySearching(this.searchRequestModel)
      .subscribe(response => {
        // console.log(response.Data);
        this.merchandiseWrapper = response.Data;
      });
  }

  RenewListBySearching(searchEvent: SearchEvent) {
    this.router.navigate([
      'main',
      {
        ...(this.searchRequestModel.CategoryId && {
          Cid: this.searchRequestModel.CategoryId
        }),
        ...(this.searchRequestModel.CategoryDetailId && {
          DetailId: this.searchRequestModel.CategoryDetailId
        }),
        ...(searchEvent.searchName && {
          Keyword: searchEvent.searchName
        }),
        ...(searchEvent.sortType !== SortTypeEnum.None && {
          SortType: searchEvent.sortType
        }),
        ...(searchEvent.orderType !== OrderTypeEnum.None && {
          OrderType: searchEvent.orderType
        })
      }
    ]);
  }
}
