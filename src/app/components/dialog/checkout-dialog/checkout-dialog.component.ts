import {
  Component,
  OnInit,
  InjectionToken,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel,
  ShoppingCart
} from 'src/app/models/ShoppingCartModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import {
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { CheckOutService } from 'src/app/services/check-out.service';
import {
  SevenElevenShopViewModel,
  TransportMethodViewModel,
  CheckOutOrder,
  AreaZip
} from 'src/app/models/CheckOutViewModel';
import {
  Validators,
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder
} from '@angular/forms';
import {
  ErrorStateMatcher,
  MatOptionSelectionChange
} from '@angular/material/core';
import { PendedShoppingCartItemModel } from 'src/app/models/RemoveShoppingCartItemModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarScaffoldComponent } from '../../snackbar/snackbar-scaffold/snackbar-scaffold.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;

    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  textFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  shoppingCartData: ShoppingCartViewModel[];
  sevenElevenShopList: SevenElevenShopViewModel[];
  transportMethodList: TransportMethodViewModel[];
  twCityList: Map<string, AreaZip[]>;
  receiveShopAddress = new AreaZip();
  checkingoutSevenElevenShop = new SevenElevenShopViewModel();
  displayedColumns = [
    'MerchandiseTitle',
    'Spec1',
    'Spec2',
    'PurchaseQty',
    'Price',
    'TotalPrice'
  ];
  checkoutOrder = new CheckOutOrder();
  transportMethod = new TransportMethodViewModel();
  @Output() renewEvent = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) private currentData: ShoppingCartViewModel[],
    public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    private checkoutservice: CheckOutService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.shoppingCartData = this.currentData;
    this.checkoutservice.GetTaiwanCityList().subscribe(response => {
      if (response.Success) {
        // console.log('response.Data', response.Data);
        this.twCityList = response.Data;
        // console.log(this.twCityList);
      }
    });
    this.checkoutservice.GetSevenElevenShop().subscribe(response => {
      if (response.Success) {
        this.sevenElevenShopList = response.Data;
        // console.log('sevenElevenShopList', this.sevenElevenShopList);
      }
    });
    this.checkoutservice.GetTransportMethodList().subscribe(response => {
      if (response.Success) {
        this.transportMethodList = response.Data;
        // console.log('transportMethodList', this.transportMethodList);
      }
    });
  }

  filterShopList() {
    return this.sevenElevenShopList.filter(
      data => data.Zip === this.receiveShopAddress.Zip
    );
  }

  setShopInfo() {
    const shop = this.sevenElevenShopList.find(
      data => data.Address === this.checkingoutSevenElevenShop.Address
    );

    this.checkoutOrder.ReceiveShop.ShopNumber = shop.ShopNumber;
    this.checkoutOrder.ReceiveShop.ShopName = shop.ShopName;
    this.checkoutOrder.ReceiveShop.Zip = shop.Zip;
    this.checkoutOrder.ReceiverAddress = shop.Address;
  }
  TransportChange() {
    const feeInfo = this.transportMethodList.find(
      a => a.TransportId === this.checkoutOrder.TransportId
    );

    // console.log('fee', feeInfo);

    if (feeInfo) {
      this.transportMethod = feeInfo;
    }
  }
  getTotalCost() {
    return (
      this.shoppingCartData
        .map(data => data.PurchaseQty * data.Price)
        .reduce((acc, value) => acc + value, 0) +
      (this.transportMethod.Fee ? this.transportMethod.Fee : 0)
    );
  }
  checkingout() {
    this.checkoutOrder.Merchandises = this.currentData.map(data => {
      return {
        Account: data.OwnerAccount,
        ProdId: data.MerchandiseId,
        SpecId: data.SpecId
      };
    });
    if (this.checkoutOrder.ReceiveShop) {
      this.checkoutOrder.ReceiveShop.Address = this.checkoutOrder.ReceiverAddress;
    }

    // console.log(this.checkoutOrder);
    this.checkoutservice.CheckingOut(this.checkoutOrder).subscribe(response => {
      if (response.Success) {
        this.snackBar.openFromComponent(SnackbarScaffoldComponent, {
          duration: 3000,
          verticalPosition: 'top',
          data: {
            text: '訂單已送出',
            textColor: '#1e90ff'
          }
        });
        this.dialogRef.close();
        this.renewEvent.emit();
      }
    });
  }
}
