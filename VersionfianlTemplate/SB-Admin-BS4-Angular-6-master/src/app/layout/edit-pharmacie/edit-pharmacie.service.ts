import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Pharmacie } from '../../models/pharmacie.model';


@Injectable({
  providedIn: 'root'
})
export class EditPharmacieService {

  private host:string="http://localhost:8181";

  private jwtToken=null; 

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
  
  updatePharmacie(pharmacie:Pharmacie){ 
    return this.http.put(this.host+"/pharmacie/update/"+pharmacie.id,pharmacie,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  getPharmacie(idPha){
    this.getUserAllData().subscribe(response=>{
      let userConnected=response; 
    });
    return this.http.get(this.host+"/pharmacie/find/"+idPha,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


}
