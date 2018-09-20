import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Commande } from '../../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommanderProduitsService {

  private host:string="http://localhost:8181";

  private jwtToken=null; 
  
  users:any;


  constructor(private http:HttpClient) { }
  
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }


  getAllProductsOfPharmacieCentrale(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/produitPharmacie/find/11",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  ajouterProduitACommande(idproduit:number,idcommande:number,commandeProduit){
    if(this.jwtToken==null) this.loadToken();
    return this.http.post(this.host+"/produitcommande/create/"+idproduit+"/"+idcommande,commandeProduit,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

 createCommande(commandett,idpharmacie){
  if(this.jwtToken==null) this.loadToken();
  return this.http.post(this.host+"/commande/create/"+idpharmacie,commandett,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
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


updateCommande(commande){
  return this.http.put(this.host+"/commande/update/"+commande.id,commande,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}


getQuantite(id){
  return this.http.get(this.host+"/produitPharmacie/findQuantite/"+id+"/11",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}

}
