import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoPharmacieComponent} from './info-pharmacie.component';


const routes: Routes = [
  {path: '',component: InfoPharmacieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoPharmacieRoutingModule { }
