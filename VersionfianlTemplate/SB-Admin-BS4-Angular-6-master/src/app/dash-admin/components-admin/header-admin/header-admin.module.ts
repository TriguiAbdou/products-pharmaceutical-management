import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAdminService } from './header-admin.service';
import { HeaderAdminComponent } from './header-admin.component';

@NgModule({
  imports: [
    CommonModule,  
  ],
  providers:[HeaderAdminService],
  declarations: [HeaderAdminComponent]
})
export class HeaderAdminModule { }
