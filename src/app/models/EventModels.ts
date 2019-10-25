import { SortTypeEnum } from './SearchRequestModel';

export class SearchEvent {
  constructor(searchName: string, sortType: SortTypeEnum) {
    this.searchName = searchName === '' ? null : searchName;
    this.sortType = sortType;
  }
  searchName: string;
  sortType: SortTypeEnum;
}
