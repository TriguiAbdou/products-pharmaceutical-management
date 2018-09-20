import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCommandesComponent} from './list-commandes.component';

const routes: Routes = [
  {
    path: '' ,component:ListCommandesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCommandesRoutingModule { }
