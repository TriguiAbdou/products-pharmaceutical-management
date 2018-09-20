import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashGpcComponent } from './dash-gpc.component';

const routes: Routes = [
  {
    path: '',
    component: DashGpcComponent,
    children: [
      { path: 'dash-gpc', redirectTo: 'dashboard-gpc', pathMatch: 'prefix'},
      { path: 'dashboard-gpc', loadChildren: './dashboard-gpc/dashboard-gpc.module#DashboardGpcModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashGpcRoutingModule { }
