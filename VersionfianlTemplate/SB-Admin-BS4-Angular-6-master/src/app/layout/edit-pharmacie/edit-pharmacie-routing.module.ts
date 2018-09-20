import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditPharmacieComponent} from './edit-pharmacie.component';

const routes: Routes = [
  {
    path: '' , component :EditPharmacieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPharmacieRoutingModule { }
