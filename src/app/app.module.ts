import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareMaterialModule } from './modules/share-material/share-material.module';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SearchRegionComponent } from './components/search-region/search-region.component';
import { MerchandiseRegionComponent } from './components/merchandise-region/merchandise-region.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { MerchandiseDetailComponent } from './pages/merchandise-detail/merchandise-detail.component';
import { MerchandiseModelComponent } from './components/merchandise-model/merchandise-model.component';
import { SidebarScaffoldComponent } from './components/sidebar-scaffold/sidebar-scaffold.component';
import { MainComponent } from './pages/main/main.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { BillbuttonDirective } from './directives/billbutton.directive';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginDialogComponent } from './components/dialog/login-dialog/login-dialog.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AddingSuccessComponent } from './pages/merchandise-detail/merchandise-detail.component';
import { AuthInterceptor } from './auth/auth.Interceptor';
import { AuthGuard } from './services/authGuard.service';
import { ShoppingcartTableComponent } from './components/shoppingcart-table/shoppingcart-table.component';
import { RemoveItemSuccessComponent } from './components/shoppingcart-table/shoppingcart-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    SearchRegionComponent,
    MerchandiseRegionComponent,
    ItemCardComponent,
    MerchandiseDetailComponent,
    MerchandiseModelComponent,
    SidebarScaffoldComponent,
    MainComponent,
    TabsComponent,
    TabComponent,
    BillbuttonDirective,
    RegisterComponent,
    LoginComponent,
    LoginDialogComponent,
    PaginatorComponent,
    ShoppingCartComponent,
    AddingSuccessComponent,
    ShoppingcartTableComponent,
    RemoveItemSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ShareMaterialModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    AddingSuccessComponent,
    RemoveItemSuccessComponent
  ]
})
export class AppModule {}
