import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechercherProduitComponent} from './rechercher-produit.component';

const routes: Routes = [
  {
    path :'' , component:RechercherProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechercherProduitRoutingModule { }
