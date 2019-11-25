import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../Models/Models';
import { environment } from 'src/environments/environment.prod';
import { EstablishOrderViewModel } from '../models/EstablishedOrder';

@Injectable({
  providedIn: 'root'
})
export class EstablishOrderService {
  constructor(private httpclient: HttpClient) {}

  GetEstablishOrderList() {
    return this.httpclient.get<BaseResponse<EstablishOrderViewModel[]>>(
      `${environment.apiUrl}EstablishedOrder/GetEstablishOrderList`
    );
  }
}
