import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel, BaseResponse, AccountModel } from '../Models/Models';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  account: AccountModel;
  userNameTrigger = new BehaviorSubject<boolean>(false);

  constructor(private httpclient: HttpClient) {}
  // public static JWTToken = '';
  isLoggedIn = localStorage.getItem('token') ? true : false;
  redirectUrl: string;
  Register(model: RegisterModel) {
    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Auth/Register`,
      model
    );
  }
  Login(model: AccountModel) {
    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Auth/Login`,
      model
    );
  }
}
