import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment';
import {
  CategoryListViewModel,
  MerchandiseViewModel,
  MerchandiseWrapper
} from '../models/CategoryListViewModel';
import { ShoppingCart, ShoppingCartWrapper } from '../models/ShoppingCartModel';

import { SearchRequestModel } from '../models/SearchRequestModel';
import { PendedShoppingCartItemModel } from '../models/RemoveShoppingCartItemModel';

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

  GetMerchandise(ItemId: string) {
    return this.httpclient.get<BaseResponse<MerchandiseViewModel>>(
      `${environment.apiUrl}Merchandise/GetMerchandise?ItemId=${ItemId}`
    );
  }

  GetMerchandiseListBySearching(searchRequestModel: SearchRequestModel) {
    console.log('environment.apiUrl', environment.production);

    return this.httpclient.post<BaseResponse<MerchandiseWrapper>>(
      `${environment.apiUrl}Merchandise/GetMerchandiseListBySearching`,
      searchRequestModel
    );
  }

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

  AddToShoppingCart(shoppingcartviewmodel: ShoppingCart) {
    return this.httpclient.post<BaseResponse<boolean>>(
      `${environment.apiUrl}ShoppingCart/AddToShoppingCart`,
      shoppingcartviewmodel
    );
  }

  GetShoppingCart() {
    return this.httpclient.get<BaseResponse<ShoppingCartWrapper[]>>(
      `${environment.apiUrl}ShoppingCart/GetShoppingCart`
    );
  }

  RemoveShoppingCartItem(
    removeshoppingcartttemmodel: PendedShoppingCartItemModel[]
  ) {
    return this.httpclient.put<BaseResponse<boolean>>(
      `${environment.apiUrl}ShoppingCart/RemoveShoppingCartItem`,
      removeshoppingcartttemmodel
    );
  }
}
