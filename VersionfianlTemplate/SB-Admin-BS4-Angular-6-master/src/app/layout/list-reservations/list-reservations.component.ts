import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations'
import { Router } from '@angular/router';
import { ListReservationsService } from './list-reservations.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss'],
  animations: [routerTransition()]

})
export class ListReservationsComponent implements OnInit {

  userss:any;

  user:User=new User();

  ProduitPharmacie:any;

  constructor(private router:Router,private listReservationsService:ListReservationsService) { }


  ngOnInit() {
    this.listReservationsService.getUserAllData().subscribe(data=>{
      this.userss=data;
      this.user=this.userss;
      this.listReservationsService.listProduitResrever(this.user.pharmacie.id).subscribe(response=>{
          this.ProduitPharmacie=response;
      });
    });
  }


  diminuernbProduit(id,produit){
    this.listReservationsService.diminuerNumber(id,this.user.pharmacie.id,produit).subscribe(data=>{
      alert("nb de produit réservé a été diminuer avec succés!");
      this.listReservationsService.listProduitResrever(this.user.pharmacie.id).subscribe(response=>{
        this.ProduitPharmacie=response;
      });
    });
  }

}
