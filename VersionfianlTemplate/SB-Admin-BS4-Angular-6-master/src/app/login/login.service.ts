import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class LoginService {

  private host:string="http://localhost:8181";

  private jwtToken=null; 
  
  users:any;
  
  constructor(private http:HttpClient) { }
  
  login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'}); 
  }

  saveToken(jwt:string){
    localStorage.setItem('token',jwt);
  }


  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


   getUserAllData(){
    if(this.jwtToken==null) this.loadToken();
    this.users=this.getCurrentUser();
    return this.http.get(this.host+"/users/"+this.users.sub,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  } 


 
  getCurrentUser(){
    let token =localStorage.getItem('token');
    if(!token) return null;
    let jwtHelper =new JwtHelperService();
    return jwtHelper.decodeToken(token);
  } 


  
}
