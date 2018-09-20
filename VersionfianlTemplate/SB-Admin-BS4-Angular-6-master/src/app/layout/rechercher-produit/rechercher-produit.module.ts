import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RechercherProduitComponent} from './rechercher-produit.component';
import {PageHeaderModule} from './../../shared';
import {RechercherProduitRoutingModule } from './rechercher-produit-routing.module';
import { RechercherProduitService } from './rechercher-produit.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RechercherProduitRoutingModule,
    PageHeaderModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers:[RechercherProduitService],
  declarations: [RechercherProduitComponent]
})
export class RechercherProduitModule { }
