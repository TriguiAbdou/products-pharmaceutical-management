import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { ReserverProduitsService } from './reserver-produits.service';

@Component({
  selector: 'app-reserver-produits',
  templateUrl: './reserver-produits.component.html',
  styleUrls: ['./reserver-produits.component.scss'],
  animations: [routerTransition()]

})
export class ReserverProduitsComponent implements OnInit {

  recherche:String;

  userss:any;

  user:User=new User();

  commandes:any;

  pharmacies:any;

  constructor(private router:Router,private reserverProduitsService:ReserverProduitsService) { }

  ngOnInit() {
    this.reserverProduitsService.getUserAllData().subscribe(response=>{
      this.userss=response;
      this.user=this.userss;
      this.reserverProduitsService.listPharmacieByRegion(this.user.pharmacie.region.nom,this.user.pharmacie.id).subscribe(data=>{
          this.pharmacies=data;
      })
    });
  }


  onSelect(id){
    this.router.navigate(['/prods-pharmacie',id]);
  }


  onSelect2(){
    this.router.navigate(['/rechercher-produit',this.recherche]);
  }

}
