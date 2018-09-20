import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListCommandesComponent} from './list-commandes.component';
import {PageHeaderModule} from './../../shared';
import { ListCommandesRoutingModule } from './list-commandes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ListCommandesRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot()
  ],
  declarations: [ListCommandesComponent]
})
export class ListCommandesModule { }
