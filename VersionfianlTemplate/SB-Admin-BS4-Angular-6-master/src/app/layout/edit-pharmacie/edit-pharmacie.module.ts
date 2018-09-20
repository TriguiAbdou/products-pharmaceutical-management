import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPharmacieRoutingModule } from './edit-pharmacie-routing.module';
import { EditPharmacieComponent } from './edit-pharmacie.component';
import {PageHeaderModule} from './../../shared';
import { FormsModule } from '@angular/forms';
import { EditPharmacieService } from './edit-pharmacie.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    EditPharmacieRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [EditPharmacieService],
  declarations: [EditPharmacieComponent]
})
export class EditPharmacieModule { }
