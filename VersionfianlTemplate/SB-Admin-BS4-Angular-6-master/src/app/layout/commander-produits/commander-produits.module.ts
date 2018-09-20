import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanderProduitsRoutingModule } from './commander-produits-routing.module';
import {CommanderProduitsComponent} from './commander-produits.component';
import {PageHeaderModule} from './../../shared';
import { CommanderProduitsService } from './commander-produits.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent, DatePickerComponent } from '../bs-component/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CommanderProduitsRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers:[CommanderProduitsService],
  declarations: [
    CommanderProduitsComponent,
    ModalComponent,
    DatePickerComponent
  ]
})
export class CommanderProduitsModule { }
