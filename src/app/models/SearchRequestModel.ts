export enum SortTypeEnum {
  None,
  SoldQty,
  Price,
  Date
}
export enum OrderTypeEnum {
  None,
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
