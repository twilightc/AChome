import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel,
  ShoppingCart
} from 'src/app/models/ShoppingCartModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckOutService } from 'src/app/services/check-out.service';
import {
  SevenElevenShopViewModel,
  TransportMethodViewModel,
  CheckOutOrder,
  AreaZip
} from 'src/app/models/CheckOutViewModel';
import {
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import {
  ErrorStateMatcher,
  MatOptionSelectionChange
} from '@angular/material/core';

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
  checkingOutData: ShoppingCart[];
  displayedColumns = [
    'MerchandiseTitle',
    'Spec1',
    'Spec2',
    'PurchaseQty',
    'Price',
    'TotalPrice'
  ];
  checkoutOrder = new CheckOutOrder();
  fee = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) private currentData: ShoppingCartViewModel[],
    private checkoutservice: CheckOutService
  ) {}
  ngOnInit() {
    this.shoppingCartData = this.currentData;
    this.checkoutservice.GetTaiwanCityList().subscribe(response => {
      if (response.Success) {
        // console.log('response.Data', response.Data);
        this.twCityList = response.Data;
        console.log(this.twCityList);
      }
    });
    this.checkoutservice.GetSevenElevenShop().subscribe(response => {
      if (response.Success) {
        this.sevenElevenShopList = response.Data;
        console.log('sevenElevenShopList', this.sevenElevenShopList);
      }
    });
    this.checkoutservice.GetTransportMethodList().subscribe(response => {
      if (response.Success) {
        this.transportMethodList = response.Data;
        console.log('transportMethodList', this.transportMethodList);
      }
    });
  }

  filterShopList() {
    return this.sevenElevenShopList.filter(
      data => data.Zip === this.receiveShopAddress.Zip
    );
  }

  setShopInfo(
    $event: MatOptionSelectionChange,
    shop: SevenElevenShopViewModel
  ) {
    if (!$event.isUserInput) {
      return;
    }
    console.log($event);

    this.checkoutOrder.ReceiveShop.ShopNumber = shop.ShopNumber;
    this.checkoutOrder.ReceiveShop.ShopName = shop.ShopName;
    this.checkoutOrder.ReceiveShop.Zip = shop.Zip;
    this.checkoutOrder.ReceiverAddress = shop.Address;
  }
  TransportChange() {
    const fee = this.transportMethodList.find(
      a => a.TransportId === this.checkoutOrder.TransportId
    );
    if (fee) {
      this.fee = fee.Fee;
    }
  }
  getTotalCost() {
    return (
      this.shoppingCartData
        .map(data => data.PurchaseQty * data.Price)
        .reduce((acc, value) => acc + value, 0) + this.fee
    );
  }

  checkingout() {
    console.log(this.checkoutOrder);
    //
  }
}
