import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReserverProduitsComponent} from './reserver-produits.component';

const routes: Routes = [
  {
  path : '',component:ReserverProduitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserverProduitsRoutingModule { }
