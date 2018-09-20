import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashGpcRoutingModule } from './dash-gpc-routing.module';
import { HeadersGpcComponent } from './components-gpc/headers-gpc/headers-gpc.component';
import { SidebarGpcComponent } from './components-gpc/sidebar-gpc/sidebar-gpc.component';
import { DashGpcComponent } from './dash-gpc.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgbDropdownModule.forRoot(),
    DashGpcRoutingModule
  ],
  declarations: [DashGpcComponent, HeadersGpcComponent, SidebarGpcComponent]
})
export class DashGpcModule { }
