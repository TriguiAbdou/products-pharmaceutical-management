import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ListReservationsComponent} from './list-reservations.component';
import { ListReservationsRoutingModule } from './list-reservations-routing.module';
import {PageHeaderModule} from './../../shared';
import { ListReservationsService } from './list-reservations.service';


@NgModule({
  imports: [
    CommonModule,
    ListReservationsRoutingModule,
    PageHeaderModule,
  ],
  providers:[ListReservationsService],
  declarations: [ListReservationsComponent]
})
export class ListReservationsModule { }
