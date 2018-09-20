import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoPharmacieRoutingModule } from './info-pharmacie-routing.module';
import {InfoPharmacieComponent} from './info-pharmacie.component';
import {PageHeaderModule} from './../../shared';
import { InfoPharmacieService } from './info-pharmacie.service';

@NgModule({
  imports: [
    CommonModule,
    InfoPharmacieRoutingModule,
    PageHeaderModule
  ],
  providers:[InfoPharmacieService],
  declarations: [InfoPharmacieComponent]
})
export class InfoPharmacieModule { 
 }
