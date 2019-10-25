import { Component, OnInit } from '@angular/core';
import {
  CategoryListViewModel,
  CategoryListDetailViewModel
} from 'src/app/models/CategoryListViewModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  CategoryList: CategoryListViewModel[];

  constructor(private merchandiseservice: MerchandiseService) {}

  ngOnInit() {
    this.merchandiseservice.GetCategoryList().subscribe(response => {
      // console.log(response.Data);

      this.CategoryList = response.Data;
    });
  }

  // showCategoryItems(Cid: string, detail: CategoryListDetailViewModel) {
  //   this.merchandiseservice
  //     .GetCategoryDetailItems(Cid, detail.DetailId)
  //     .subscribe(response => {
  //       console.log(response);
  //       this.merchandiseservice.merchandiseList = response.Data;
  //     });
  // }
}
