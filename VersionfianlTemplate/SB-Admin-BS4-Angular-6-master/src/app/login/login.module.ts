import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule],
    providers: [LoginService],
    declarations: [LoginComponent]
})
export class LoginModule {}
