import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdsPharmacieComponent} from './prods-pharmacie.component';

const routes: Routes = [
  {
    path: '',component:ProdsPharmacieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdsPharmacieRoutingModule { }
