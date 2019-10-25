export enum SortTypeEnum {
  SoldQty,
  Price,
  Date,
  None
}
export enum OrderTypeEnum {
  Asc,
  Desc
}

export class SearchRequestModel {
  CategoryId?: string;
  CategoryDetailId?: string;
  Keyword: string;
  PageIndex: number;
  PageSize: number;
  SortType?: SortTypeEnum;
  OrderType?: OrderTypeEnum;
}
