import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardGpcComponent } from './dashboard-gpc.component';

const routes: Routes = [
  {
    path: '', component: DashboardGpcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardGpcRoutingModule { }
