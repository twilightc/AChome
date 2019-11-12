import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchandiseDetailComponent } from './pages/merchandise-detail/merchandise-detail.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'detail', component: MerchandiseDetailComponent },
  { path: 'main', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
