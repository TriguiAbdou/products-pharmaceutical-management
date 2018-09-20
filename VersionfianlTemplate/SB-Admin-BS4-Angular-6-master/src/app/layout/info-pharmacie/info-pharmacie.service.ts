import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class InfoPharmacieService {

  

  private host:string="http://localhost:8181";

  private jwtToken=null; 

  pharmacie:any;

  users:any;

  constructor(private http:HttpClient) {}

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


  getCurrentUser(){
    let token =localStorage.getItem('token');
    if(!token) return null;
    let jwtHelper =new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
  
  
  getUserAllData(){
    if(this.jwtToken==null) this.loadToken();
    this.users=this.getCurrentUser();
    return this.http.get(this.host+"/users/IDpharmacie/"+this.users.sub,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  
  getPharmacie(idPha){
    
    return this.http.get(this.host+"/pharmacie/find/"+idPha,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

}
