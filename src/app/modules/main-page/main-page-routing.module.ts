import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMainComponent } from './new-main/new-main.component';

const routes: Routes = [
  {
    path: '',
    component: NewMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
