import { SortTypeEnum, OrderTypeEnum } from './SearchRequestModel';

export class SearchEvent {
  constructor(
    searchName: string,
    sortType: SortTypeEnum,
    orderType: OrderTypeEnum
  ) {
    this.searchName = searchName === '' ? null : searchName;
    this.sortType = sortType;
    this.orderType = orderType;
  }
  searchName: string;
  sortType: SortTypeEnum;
  orderType: OrderTypeEnum;
}
