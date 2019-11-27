import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ShareMaterialModule } from '../../share-material/share-material.module';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    FormsModule,
    ShareMaterialModule
  ]
})
export class RegisterPageModule { }
