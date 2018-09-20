import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatModule } from '../../shared';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
  imports: [
      CommonModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot(),
      DashboardAdminRoutingModule,
      StatModule,
      Ng2Charts
  ],
  declarations: [
      DashboardAdminComponent,
     
  ]
})
export class DashboardAdminModule { }
