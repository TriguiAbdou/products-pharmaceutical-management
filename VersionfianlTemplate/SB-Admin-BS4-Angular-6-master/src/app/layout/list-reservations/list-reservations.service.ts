import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Produitspharmacies } from '../../models/produitspharmacies.model.';

@Injectable({
  providedIn: 'root'
})
export class ListReservationsService {

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


    listProduitResrever(id:number){
      this.getUserAllData().subscribe(response=>{ 
      });
      return this.http.get(this.host+"/produitPharmacie/findProduitReserve/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }

    diminuerNumber(idprod:number,idPhama:number,produit:Produitspharmacies){
      return this.http.put(this.host+"/produitPharmacie/vendureserver/"+idprod+"/"+idPhama,produit,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }
  
}
