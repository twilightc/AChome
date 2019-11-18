import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel
} from 'src/app/models/ShoppingCartModel';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckOutService } from 'src/app/services/check-out.service';
import {
  CityData,
  SevenElevenShopViewModel,
  TransportMethodViewModel,
  CheckOutOrder,
  AreaZip
} from 'src/app/models/CheckOutViewModel';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  shoppingCartData: ShoppingCartViewModel[];
  twCityList: Map<string, AreaZip[]>;
  sevenElevenShopList: SevenElevenShopViewModel[];
  transportMethodList: TransportMethodViewModel[];
  checkoutOrder = new CheckOutOrder();
  ReceiveShopAddress = new AreaZip();
  // 'Price',
  // 'TotalPrice'
  displayedColumns = ['MerchandiseTitle', 'Spec1', 'Spec2', 'PurchaseQty'];
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
      data => data.Zip === this.ReceiveShopAddress.Zip
    );
  }
}
