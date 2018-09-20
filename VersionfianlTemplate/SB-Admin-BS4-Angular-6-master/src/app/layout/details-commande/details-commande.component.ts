import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DetailsCommandeService } from './details-commande.service';
import { Commande } from '../../models/commande.model';
import { CommandeProduit } from '../../models/commandeProduit.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss'],
  animations :[routerTransition()]

})
export class DetailsCommandeComponent implements OnInit {

  commandeId:number;

  commandeDetails:any;

  commandes:Commande=new Commande();

  commandeProduit:any;

  
  compro:CommandeProduit;

  userss:any;

  user:User=new User();

  commandes1:any;


  constructor(private router: Router,private route: ActivatedRoute,private detailsCommandeService:DetailsCommandeService) {}

  ngOnInit() :void {
    this.route.params.forEach((params: Params) => {
      this.commandeId = Number.parseInt(params['id']);
    });


    this.detailsCommandeService.findCommande(this.commandeId).subscribe(response=>{
      this.commandeDetails=response;
      this.commandes=this.commandeDetails;
    });

    this.detailsCommandeService.findProduitsCommander(this.commandeId).subscribe(data=>{
      this.commandeProduit=data;
      console.log(data);
    });


  }


  confimerLaLivraison(commandelivr){
    if(commandelivr.livraison == "oui"){
        alert("la livraison de cette commande est déja confimée");
    }
    else if(commandelivr.livraison=="non"){
      alert("livraison confirmé avec succés !");
      this.detailsCommandeService.confirmerlivraison(commandelivr).subscribe(response=>{
      });
    }  
  }


  AnnulerCommande(){
    this.detailsCommandeService.deleteCommandeProduits(this.commandeId).subscribe(response=>{
        this.detailsCommandeService.deleteCommande(this.commandeId).subscribe(data=>{
            alert("commande annuler avec succés");
            this.router.navigate(['/list-commandes']);
        });
    });
  }

}
