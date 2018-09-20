import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

    getCurrentUser(){
    let token =localStorage.getItem('token');
    if(!token) return null;
    let jwtHelper =new JwtHelperService();
    return jwtHelper.decodeToken(token);
  } 

   
}
