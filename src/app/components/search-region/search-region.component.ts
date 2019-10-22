import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectorRef,
  EventEmitter
} from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';

@Component({
  selector: 'app-search-region',
  templateUrl: './search-region.component.html',
  styleUrls: ['./search-region.component.scss']
})
export class SearchRegionComponent implements OnInit {
  searchName = '';
  @Input() merchandiseList = new Array<MerchandiseViewModel>();
  @Output() RenewListBySearching = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  SortByPrice() {
    this.merchandiseList = this.merchandiseList.sort(
      (a: MerchandiseViewModel, b: MerchandiseViewModel): number => {
        return a.Price === b.Price ? 0 : a.Price > b.Price ? 1 : -1;
      }
    );
  }

  SortBySoldQty() {
    this.merchandiseList = this.merchandiseList.sort(
      (a: MerchandiseViewModel, b: MerchandiseViewModel): number => {
        return a.SoldQty === b.SoldQty ? 0 : a.SoldQty > b.SoldQty ? 1 : -1;
      }
    );
  }

  Search() {
    this.RenewListBySearching.emit(this.searchName);
  }
}
