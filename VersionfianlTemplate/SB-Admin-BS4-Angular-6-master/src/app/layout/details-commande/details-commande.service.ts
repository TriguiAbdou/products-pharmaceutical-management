import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Commande } from '../../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsCommandeService {

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


  findCommande(id:number){
    this.getUserAllData().subscribe(response=>{ 
    });
    return this.http.get(this.host+"/commande/find/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  findProduitsCommander(id:number){
    return this.http.get(this.host+"/produitcommande/produitscommander/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  confirmerlivraison(commandeliv:Commande){
    return this.http.put(this.host+"/commande/confirmer/"+commandeliv.id,commandeliv,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }


  deleteCommandeProduits(commandeId:number){
    return this.http.delete(this.host+"/produitcommande/delete/"+commandeId,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  deleteCommande(commandeId:number){
    return this.http.delete(this.host+"/commande/delete/"+commandeId,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  
}
