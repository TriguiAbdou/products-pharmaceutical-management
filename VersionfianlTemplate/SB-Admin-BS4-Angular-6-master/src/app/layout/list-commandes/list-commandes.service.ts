import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Commande } from '../../models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class ListCommandesService {

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


  allCommandeOfPharmacie(IdPharmacie:number){
    return this.http.get(this.host+"/commande/findallcommande/"+IdPharmacie,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


  confirmerlivraison(commandeliv:Commande){
    return this.http.put(this.host+"/commande/confirmer/"+commandeliv.id,commandeliv,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

  listByDateLivraison(id:number){
    return this.http.get(this.host+"/commande/findByDateLivraison/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

  listByDateCommande(id:number){
    return this.http.get(this.host+"/commande/findByDateCommande/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

  listByEtat(id:number){
    return this.http.get(this.host+"/commande/findByEtat/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

}
