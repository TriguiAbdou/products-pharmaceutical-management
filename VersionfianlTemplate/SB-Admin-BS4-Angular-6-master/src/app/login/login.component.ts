import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(private authService:LoginService,private router:Router) {}


    userss:any;

    ngOnInit() {
    }

    
    onLogin(user){
        console.log(user);
        this.authService.login(user)
            .subscribe(resp=>{
                let jwt =resp.headers.get('authorization');
                this.authService.saveToken(jwt);
                this.authService.getUserAllData().subscribe(response=>{
                    this.userss=response;
                    if(this.userss.role.id == 2){
                        this.router.navigate(['/']);
                    }
                    else if (this.userss.role.id == 1){
                        this.router.navigate(['/dash-admin/dashboard-admin']);
                    }
                    else if (this.userss.role.id == 3){
                        this.router.navigate(['/dash-gpc/dashboard-gpc']);
                    }
                });
             
            },
                err=>{
                    alert("vérifier votre username et password !!")
            });
    }
   
}
