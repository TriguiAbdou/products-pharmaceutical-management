import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdsPharmacieRoutingModule } from './prods-pharmacie-routing.module';
import {ProdsPharmacieComponent} from './prods-pharmacie.component';
import {PageHeaderModule} from './../../shared';
import { ProdsPharmacieService } from './prods-pharmacie.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ProdsPharmacieRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot()
  ],
  providers:[
    ProdsPharmacieService
  ],
  declarations: [ProdsPharmacieComponent]
})
export class ProdsPharmacieModule { }
