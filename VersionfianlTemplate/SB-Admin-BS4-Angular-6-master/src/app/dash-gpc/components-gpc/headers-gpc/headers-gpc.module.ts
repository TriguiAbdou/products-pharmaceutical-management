import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersGpcComponent } from './headers-gpc.component';
import { HeadersGpcService } from './headers-gpc.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[HeadersGpcService],
  declarations: [HeadersGpcComponent]
})
export class HeadersGpcModule { }
