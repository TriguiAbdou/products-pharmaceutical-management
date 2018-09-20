import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProdsPharmacieService {

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


  listeProduitsOfPhamracie(id:number){
    this.getUserAllData().subscribe(response=>{ 
    });
    return this.http.get(this.host+"/produitPharmacie/find/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  resreverProduit(idPharmacie:number,idProduit:number,produitPharmacie){
    return this.http.put(this.host+"/produitPharmacie/reserver/"+idProduit+"/"+idPharmacie,produitPharmacie,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  findPharmacie(id:number){
    return this.http.get(this.host+"/pharmacie/find/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

}
