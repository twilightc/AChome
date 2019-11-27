import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishedOrderPageComponent } from './established-order-page/established-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: EstablishedOrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishedOrderPageRoutingModule {}
