import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ReserverProduitsService {

  private host:string="http://localhost:8181";

    private jwtToken=null; 
    
    users:any;


    constructor(private http:HttpClient) { }
    
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


  listPharmacieByRegion(nomRegion:String,nb:Number){
    this.getUserAllData().subscribe(response=>{ 
    });
    return this.http.get(this.host+"/pharmacie/PharmaciesSelonRegion/"+nomRegion+"/"+nb,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

}
