import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchandiseDetailComponent } from './merchandise-detail/merchandise-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MerchandiseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseDetailRoutingModule {}
