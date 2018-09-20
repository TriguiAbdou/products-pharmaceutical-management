import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCommandeComponent } from './details-commande.component';

const routes: Routes = [
  {
    path:'' , component:DetailsCommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCommandeRoutingModule { }
