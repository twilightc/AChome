import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  paginator: MatPaginator;
  merchandiseList = new Array<MerchandiseViewModel>();

  constructor(
    private merchandiseservice: MerchandiseService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateroute.paramMap
      .pipe(
        switchMap(params => of([params.get('Cid'), params.get('DetailId')]))
      )
      .subscribe(data => {
        console.log(data);
        if (data[0] !== null && data[1] !== null) {
          this.getCategoryDetailItems(data);
        } else {
          this.getMerchandises(0, 10);
        }
      });
  }

  pageChange(pageEvent: PageEvent) {
    this.getMerchandises(pageEvent.pageIndex, pageEvent.pageSize);
  }

  getCategoryDetailItems(dataFromCategory: string[]) {
    this.merchandiseservice
      .GetCategoryDetailItems(dataFromCategory[0], dataFromCategory[1])
      .subscribe(response => {
        console.log('dataIncategory:', response.Data);

        this.merchandiseservice.merchandiseList = response.Data;
        this.merchandiseList = this.merchandiseservice.merchandiseList;
      });
  }

  getMerchandises(pageIndex, pageSize) {
    this.merchandiseservice
      .GetMerchandiseList(pageIndex, pageSize)
      .subscribe(response => {
        // console.log(response.Data);
        this.merchandiseservice.merchandiseList = response.Data;
        this.merchandiseList = this.merchandiseservice.merchandiseList;
      });
  }

  RenewListBySearching(searchName: string) {
    if (searchName.length !== 0) {
      this.merchandiseservice
        .GetMerchandiseListBySearching(searchName)
        .subscribe(response => {
          this.merchandiseservice.merchandiseList = response.Data;
          this.merchandiseList = this.merchandiseservice.merchandiseList;
        });
    } else {
      this.getMerchandises(0, 10);
    }
  }
}
