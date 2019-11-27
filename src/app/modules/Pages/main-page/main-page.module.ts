import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ShareMaterialModule } from '../../share-material/share-material.module';
import { SidebarScaffoldComponent } from 'src/app/components/sidebar-scaffold/sidebar-scaffold.component';
import { MerchandiseRegionComponent } from 'src/app/components/merchandise-region/merchandise-region.component';
import { SearchRegionComponent } from 'src/app/components/search-region/search-region.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SidebarScaffoldComponent,
    MerchandiseRegionComponent,
    SearchRegionComponent,
    SideMenuComponent,
    ItemCardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ShareMaterialModule
  ]
})
export class MainPageModule {}
