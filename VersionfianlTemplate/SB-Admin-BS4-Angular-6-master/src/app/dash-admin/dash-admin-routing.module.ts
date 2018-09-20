import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashAdminComponent } from './dash-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashAdminComponent,
    children: [
      { path: 'dash-admin', redirectTo: 'dashboard-admin', pathMatch: 'prefix'},
      { path: 'dashboard-admin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
