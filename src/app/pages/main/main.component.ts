import { Component, OnInit, ViewChild } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  paginator: MatPaginator;
  merchandiseList = new Array<MerchandiseViewModel>();

  constructor(private merchandiseservice: MerchandiseService) {}

  ngOnInit() {
    this.getMerchandises(0, 10);
  }

  pageChange(pageEvent: PageEvent) {
    this.getMerchandises(pageEvent.pageIndex, pageEvent.pageSize);
  }

  getMerchandises(pageIndex, pageSize) {
    this.merchandiseservice
      .GetMerchandiseList(pageIndex, pageSize)
      .subscribe(response => {
        console.log(response.Data);
        this.merchandiseList = response.Data;
      });
  }
}
