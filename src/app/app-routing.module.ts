import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'establish-order',
    loadChildren: () =>
      import(
        './modules/Pages/established-order-page/established-order-page.module'
      ).then(res => res.EstablishedOrderPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import(
        './modules/Pages/shopping-cart-page/shopping-cart-page.module'
      ).then(res => res.ShoppingCartPageModule)
  },
  {
    path: 'detail',
    loadChildren: () =>
      import(
        './modules/Pages/merchandise-detail/merchandise-detail.module'
      ).then(res => res.MerchandiseDetailModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/Pages/register-page/register-page.module').then(
        res => res.RegisterPageModule
      )
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/Pages/main-page/main-page.module').then(
        res => res.MainPageModule
      )
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
