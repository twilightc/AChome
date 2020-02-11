import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandiseDetailRoutingModule } from './merchandise-detail-routing.module';
import { MerchandiseDetailComponent } from './merchandise-detail/merchandise-detail.component';
import { ShareMaterialModule } from '../../share-material/share-material.module';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { AskingFormComponent } from 'src/app/components/asking-form/asking-form.component';

@NgModule({
  declarations: [
    MerchandiseDetailComponent,
    TabsComponent,
    TabComponent,
    AskingFormComponent
  ],
  imports: [
    CommonModule,
    MerchandiseDetailRoutingModule,
    FormsModule,
    ShareMaterialModule
  ]
})
export class MerchandiseDetailModule {}
