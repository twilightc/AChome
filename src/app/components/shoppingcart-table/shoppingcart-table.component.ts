import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel,
  ShoppingCart
} from 'src/app/models/ShoppingCartModel';
import { PendedShoppingCartItemModel } from 'src/app/models/RemoveShoppingCartItemModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarScaffoldComponent } from '../snackbar/snackbar-scaffold/snackbar-scaffold.component';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../dialog/checkout-dialog/checkout-dialog.component';
import { Response } from 'selenium-webdriver/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingcart-table',
  templateUrl: './shoppingcart-table.component.html',
  styleUrls: ['./shoppingcart-table.component.scss']
})
export class ShoppingcartTableComponent implements OnInit, OnDestroy {
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
  unSubscribe: Subscription[] = [];
  @Input() shoppingCartRawData: ShoppingCartWrapper;
  @Output() RenewShoppingCartRawData = new EventEmitter();

  constructor(
    private merchandiseservice: MerchandiseService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.shoppingCartData = this.shoppingCartRawData;

    this.shoppingCartDataSource = new MatTableDataSource<ShoppingCartViewModel>(
      this.shoppingCartData.ShoppingCartViewModels
    );
  }

  ngOnDestroy(): void {
    this.unSubscribe.forEach(data => data.unsubscribe());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.shoppingCartDataSource.data.length;

    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.shoppingCartDataSource.data.forEach(row =>
          this.selection.select(row)
        );
    console.log('masterToggle:', this.selection);
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

  checkChanged(cart: ShoppingCartViewModel) {
    this.selection.toggle(cart);
  }

  deleteItem() {
    // console.log(this.selection.selected);

    const removedItemsInCart: PendedShoppingCartItemModel[] = this.selection.selected.map(
      data => {
        console.log(data);

        return {
          Account: data.OwnerAccount,
          ProdId: data.MerchandiseId,
          SpecId: data.SpecId
        };
      }
    );
    console.log(removedItemsInCart);

    if (removedItemsInCart.length !== 0) {
      this.merchandiseservice
        .RemoveShoppingCartItem(removedItemsInCart)
        .subscribe(response => {
          if (response.Success) {
            this.snackBar.openFromComponent(SnackbarScaffoldComponent, {
              duration: 3000,
              verticalPosition: 'top',
              data: {
                text: '商品已從購物車移除',
                textColor: '#32cd32'
              }
            });
            this.RenewShoppingCartRawData.emit();
          }
        });
    }
  }

  checkingOut() {
    let checkingoutData: ShoppingCartViewModel[];
    if (this.selection.isEmpty()) {
      checkingoutData = this.shoppingCartData.ShoppingCartViewModels;
    } else {
      checkingoutData = this.selection.selected;
    }
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      data: checkingoutData
    });
    const renew = dialogRef.componentInstance.renewEvent.subscribe(() => {
      this.RenewShoppingCartRawData.emit();
    });
    const sub = dialogRef.afterClosed().subscribe(() => {
      renew.unsubscribe();
    });
    this.unSubscribe.push(sub);
  }
}
