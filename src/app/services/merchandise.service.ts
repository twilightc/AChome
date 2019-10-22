import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment.prod';
import {
  CategoryListViewModel,
  MerchandiseViewModel
} from '../models/CategoryListViewModel';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {
  merchandiseList: MerchandiseViewModel[];
  constructor(private httpclient: HttpClient) {}

  GetCategoryList() {
    return this.httpclient.get<BaseResponse<CategoryListViewModel[]>>(
      `${environment.apiUrl}Merchandise/GetCategoryListAsync`
    );
  }

  GetMerchandiseList(pageIndex: number, pageSize: number) {
    return this.httpclient.get<BaseResponse<MerchandiseViewModel[]>>(
      `${environment.apiUrl}Merchandise/GetMerchandiseList?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }

  GetMerchandiseListBySearching(searchName: string) {
    return this.httpclient.get<BaseResponse<MerchandiseViewModel[]>>(
      `${environment.apiUrl}Merchandise/GetMerchandiseListBySearching?name=${searchName}`
    );
  }

  GetCategoryDetailItems(CategoryId: string, CategoryDetailId: string) {
    return this.httpclient.get<BaseResponse<MerchandiseViewModel[]>>(
      `${environment.apiUrl}Merchandise/GetCategoryDetailItems?CategoryId=${CategoryId}&CategoryDetailId=${CategoryDetailId}`
    );
  }
}
