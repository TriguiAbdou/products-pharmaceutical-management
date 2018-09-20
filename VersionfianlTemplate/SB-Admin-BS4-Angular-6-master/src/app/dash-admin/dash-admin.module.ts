import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAdminRoutingModule } from './dash-admin-routing.module';
import { SidebarAdminComponent } from './components-admin/sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './components-admin/header-admin/header-admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DashAdminComponent } from './dash-admin.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbDropdownModule.forRoot(),
    DashAdminRoutingModule
  ],
  declarations: [DashAdminComponent,HeaderAdminComponent, SidebarAdminComponent]
})
export class DashAdminModule { }
