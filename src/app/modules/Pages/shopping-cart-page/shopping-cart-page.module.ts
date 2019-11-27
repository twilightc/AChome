import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartPageRoutingModule } from './shopping-cart-page-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingcartTableComponent } from 'src/app/components/shoppingcart-table/shoppingcart-table.component';
import { ShareMaterialModule } from '../../share-material/share-material.module';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingcartTableComponent],
  imports: [CommonModule, ShoppingCartPageRoutingModule, ShareMaterialModule]
})
export class ShoppingCartPageModule {}
