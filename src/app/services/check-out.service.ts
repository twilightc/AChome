import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment';
import {
  SevenElevenShopViewModel,
  TransportMethodViewModel,
  AreaZip,
  CheckOutOrder
} from '../models/CheckOutViewModel';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  constructor(private httpclient: HttpClient) {}

  GetTransportMethodList() {
    return this.httpclient.get<BaseResponse<TransportMethodViewModel[]>>(
      `${environment.apiUrl}Checkout/GetTransportMethodList`
    );
  }

  GetSevenElevenShop() {
    return this.httpclient.get<BaseResponse<SevenElevenShopViewModel[]>>(
      `${environment.apiUrl}Checkout/GetSevenElevenShop`
    );
  }

  GetTaiwanCityList() {
    return this.httpclient.get<BaseResponse<Map<string, AreaZip[]>>>(
      `${environment.apiUrl}Checkout/GetTaiwanCityList`
    );
  }

  CheckingOut(checkorder: CheckOutOrder) {
    return this.httpclient.post<BaseResponse<boolean>>(
      `${environment.apiUrl}Checkout/CheckingOut`,
      checkorder
    );
  }
}
