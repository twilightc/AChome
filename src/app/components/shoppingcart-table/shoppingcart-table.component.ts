import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel
} from 'src/app/models/CategoryListViewModel';

@Component({
  selector: 'app-shoppingcart-table',
  templateUrl: './shoppingcart-table.component.html',
  styleUrls: ['./shoppingcart-table.component.scss']
})
export class ShoppingcartTableComponent implements OnInit {
  displayedColumns = [
    'select',
    'MerchandiseTitle',
    'Spec1',
    'Spec2',
    'Price',
    'PurchaseQty',
    'TotalPrice'
  ];
  shoppingCartDataSource: MatTableDataSource<ShoppingCartViewModel>;
  selection = new SelectionModel<ShoppingCartViewModel>(true, []);
  shoppingCartData: ShoppingCartWrapper;
  @Input() shoppingCartRawData: ShoppingCartWrapper;

  constructor() {}

  ngOnInit() {
    this.shoppingCartData = this.shoppingCartRawData;
    console.log(this.shoppingCartData.SellerAccount);

    this.shoppingCartDataSource = new MatTableDataSource<ShoppingCartViewModel>(
      this.shoppingCartData.ShoppingCartViewModels
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.shoppingCartDataSource.data.length;

    return numSelected === numRows;
  }

  masterToggle(data: ShoppingCartViewModel[]) {
    this.isAllSelected()
      ? this.selection.clear()
      : this.shoppingCartDataSource.data.forEach(row => {
          this.selection.select(row);
        });
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ShoppingCartViewModel, index?: number): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${index + 1}`;
  }

  getTotalCost() {
    return this.shoppingCartData.ShoppingCartViewModels.map(
      data => data.PurchaseQty * data.Price
    ).reduce((acc, value) => acc + value, 0);
  }
}
