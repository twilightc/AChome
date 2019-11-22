export class RegisterModel {
  AccountName: string;
  Password: string;
  UserName: string;
  Email: string;
  PhoneNumber: string;
}

export class AccountModel {
  Account = '';
  Password = '';
}

export class ArticleModel {
  ArticleTitle = '';
  ArticleContent = '';
}

export class BaseResponse<T> {
  Success: boolean;
  Msg: string;
  Data: T;
}

export class TokenBody {
  Account: string;
  UserName: string;
}
