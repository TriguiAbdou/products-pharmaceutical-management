import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReservationsComponent} from './list-reservations.component';

const routes: Routes = [
  {
    path :'',component: ListReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListReservationsRoutingModule { }
