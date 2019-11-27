import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import {
  ShoppingCartWrapper,
  ShoppingCartViewModel
} from 'src/app/models/ShoppingCartModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartWrapper: ShoppingCartWrapper[];

  constructor(private merchandiseservice: MerchandiseService) {}

  ngOnInit() {
    this.RenewShoppingCartRawData();
  }

  RenewShoppingCartRawData() {
    this.merchandiseservice.GetShoppingCart().subscribe(response => {
      this.shoppingCartWrapper = response.Data;
    });
  }
}
