import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel
} from 'src/app/models/CategoryListViewModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns = [
    'select',
    'MerchandiseTitle',
    'Spec1',
    'Spec2',
    'Price',
    'PurchaseQty'
  ];
  shoppingCartWrapper: ShoppingCartWrapper[];
  shoppingCartDataSource: MatTableDataSource<ShoppingCartViewModel>;
  selection = new SelectionModel<ShoppingCartViewModel>(true, []);

  constructor(private merchandiseservice: MerchandiseService) {}

  ngOnInit() {
    this.merchandiseservice.GetShoppingCart().subscribe(response => {
      console.log(response.Data);
      this.shoppingCartDataSource = new MatTableDataSource<
        ShoppingCartViewModel
      >(response.Data[0].ShoppingCartViewModels);
      console.log(this.shoppingCartDataSource);
      this.shoppingCartWrapper = response.Data;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.shoppingCartDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(data: ShoppingCartViewModel[]) {
    this.shoppingCartDataSource = new MatTableDataSource<ShoppingCartViewModel>(
      data
    );
    this.isAllSelected()
      ? this.selection.clear()
      : this.shoppingCartDataSource.data.forEach(row => {
          console.log(row);

          this.selection.select(row);
        });
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ShoppingCartViewModel, index?: number): string {
    console.log(row, index);

    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${index + 1}`;
  }
}
