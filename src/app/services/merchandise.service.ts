import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment.prod';
import {
  CategoryListViewModel,
  MerchandiseViewModel,
  MerchandiseWrapper
} from '../models/CategoryListViewModel';
import { SearchRequestModel } from '../models/SearchRequestModel';

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

  GetMerchandiseListBySearching(searchRequestModel: SearchRequestModel) {
    return this.httpclient.post<BaseResponse<MerchandiseWrapper>>(
      `${environment.apiUrl}Merchandise/GetMerchandiseListBySearching`,
      searchRequestModel
    );
  }

  // GetMerchandiseList(
  //   pageIndex: number,
  //   pageSize: number,
  //   cid: string,
  //   detailId: string
  // ) {
  //   return this.httpclient.get<BaseResponse<MerchandiseWrapper>>(
  //     `${environment.apiUrl}Merchandise/GetMerchandiseList?pageIndex=${pageIndex}&pageSize=${pageSize}&categoryId=${cid}&detailId=${detailId}`
  //   );
  // }

  GetMerchandiseListBySearchingName(searchName: string) {
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
