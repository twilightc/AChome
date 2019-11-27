import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareMaterialModule } from './modules/share-material/share-material.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginDialogComponent } from './components/dialog/login-dialog/login-dialog.component';
import { AuthInterceptor } from './auth/auth.Interceptor';
import { AuthGuard } from './services/authGuard.service';
import { CheckoutDialogComponent } from './components/dialog/checkout-dialog/checkout-dialog.component';
import { SnackbarScaffoldComponent } from './components/snackbar/snackbar-scaffold/snackbar-scaffold.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginDialogComponent,
    CheckoutDialogComponent,
    SnackbarScaffoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ShareMaterialModule
  ],
  // exports: [ReactiveFormsModule],
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
    SnackbarScaffoldComponent,
    CheckoutDialogComponent
  ]
})
export class AppModule {}
