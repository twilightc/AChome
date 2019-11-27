import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishedOrderPageRoutingModule } from './established-order-page-routing.module';
import { EstablishedOrderPageComponent } from './established-order-page/established-order-page.component';
import { ShareMaterialModule } from '../../share-material/share-material.module';

@NgModule({
  declarations: [EstablishedOrderPageComponent],
  imports: [
    CommonModule,
    EstablishedOrderPageRoutingModule,
    ShareMaterialModule
  ]
})
export class EstablishedOrderPageModule {}
