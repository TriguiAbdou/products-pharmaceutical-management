import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserverProduitsRoutingModule } from './reserver-produits-routing.module';
import {ReserverProduitsComponent} from './reserver-produits.component';
import {PageHeaderModule} from './../../shared';
import { ReserverProduitsService } from './reserver-produits.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReserverProduitsRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  providers:[ReserverProduitsService],
  declarations: [ReserverProduitsComponent]
})
export class ReserverProduitsModule { }
