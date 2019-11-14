import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment.prod';
import {
  CategoryListViewModel,
  MerchandiseViewModel,
  MerchandiseWrapper,
  ShoppingCart,
  ShoppingCartWrapper
} from '../models/CategoryListViewModel';
import { SearchRequestModel } from '../models/SearchRequestModel';
import { RemoveShoppingCartItemModel } from '../models/RemoveShoppingCartItemModel';

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
      `${environment.apiUrl}Merchandise/AddToShoppingCart`,
      shoppingcartviewmodel
    );
  }

  GetShoppingCart() {
    return this.httpclient.get<BaseResponse<ShoppingCartWrapper[]>>(
      `${environment.apiUrl}Merchandise/GetShoppingCart`
    );
  }

  RemoveShoppingCartItem(
    removeshoppingcartttemmodel: RemoveShoppingCartItemModel[]
  ) {
    return this.httpclient.put<BaseResponse<boolean>>(
      `${environment.apiUrl}Merchandise/RemoveShoppingCartItem`,
      removeshoppingcartttemmodel
    );
  }
}
