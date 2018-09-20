import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardGpcRoutingModule } from './dashboard-gpc-routing.module';
import { DashboardGpcComponent } from './dashboard-gpc.component';
import { StatModule } from '../../shared';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardGpcRoutingModule,
    StatModule
  ],
  declarations: [DashboardGpcComponent]
})
export class DashboardGpcModule { }
