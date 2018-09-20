import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsCommandeComponent} from './details-commande.component';
import {PageHeaderModule} from './../../shared';
import { DetailsCommandeRoutingModule } from './details-commande-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsCommandeRoutingModule,
    PageHeaderModule
  ],
  declarations: [DetailsCommandeComponent]
})
export class DetailsCommandeModule { }
