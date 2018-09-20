import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { CommanderProduitsService } from './commander-produits.service';
import { CommandeProduit } from '../../models/commandeProduit.model';
import { Commande } from '../../models/commande.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produitspharmacies } from '../../models/produitspharmacies.model.';


@Component({
  selector: 'app-commander-produits',
  templateUrl: './commander-produits.component.html',
  styleUrls: ['./commander-produits.component.scss'],
  animations :[routerTransition()]
})
export class CommanderProduitsComponent implements OnInit {

  closeResult: string;

  produitspharmacies:any;

  commandeProduit :CommandeProduit=new CommandeProduit();

  userss:any;

  prixTotal:number=0;

  titrePopUp:String;

  ContenuPopUp:String;

  prixTotalProduit:number;

  aDejaPasserCommande:number=0;

  newCommande:Commande=new Commande();

  commande:any;

  commandePasser:Commande=new Commande();

  cadrePasserCommande:String="none";
  
  jour:String;
    
  mois:String;
    
  ans:String;

  date:any;

  messageSucces:String;

  quantie:number;
  
  quan:any;

  constructor(private CommanderProduitsService:CommanderProduitsService,private router:Router,private modalService: NgbModal) { }


  ngOnInit() {
    this.commandeProduit.quantiteCom=0;
    this.CommanderProduitsService.getAllProductsOfPharmacieCentrale().subscribe(response=>{
      this.produitspharmacies=response;
      document.getElementById("a").style.display='none';
      document.getElementById("msg").style.display='none';

    });
  }


  opennn(content,nom,produitPharmacie){
     this.CommanderProduitsService.getQuantite(produitPharmacie.produit.code).subscribe(dataa=>{
        this.quan=dataa;
        this.quantie=this.quan;
        console.log(dataa);
        if(this.quantie == 1){
          
          this.titrePopUp="Commander le produit '"+nom+"'";
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
       }
        else{
          alert("ouuups!ce produit n'est pas en stock!");
        }
      });
  }


  open(content,nom) {
       
        this.titrePopUp="Commander le produit '"+nom+"'";
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
     
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  
  }


  CommandePro(produitPharma:Produitspharmacies,content,nom,c){
    document.getElementById("msg").style.display='none';
        if(this.commandeProduit.quantiteCom==0){
          document.getElementById("msg").style.display='';
        }
        else{
          this.prixTotalProduit=this.commandeProduit.quantiteCom * produitPharma.prixVente;
          this.prixTotal=this.prixTotal+this.prixTotalProduit;
          this.commandeProduit.prix=this.prixTotalProduit;
          if(this.aDejaPasserCommande == 0){
            this.CommanderProduitsService.getUserAllData().subscribe(data=>{
              this.userss=data;
              this.CommanderProduitsService.createCommande(this.newCommande,this.userss.pharmacie.id).subscribe(response=>{
                this.commande=response;
                this.commandePasser=this.commande;
                this.CommanderProduitsService.ajouterProduitACommande(produitPharma.produit.code,this.commande.id,this.commandeProduit).subscribe(response=>{
                  document.getElementById("a").style.display='';
                  this.messageSucces="Produit ajouter au panier avec succés!";
                  this.titrePopUp="Commander le produit '"+nom+"'";
                  this.modalService.open(content).result.then((result) => {
                  this.closeResult = `Closed with: ${result}`;
                  }, (reason) => {
                      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                  });
                  c('Close click');
                  this.commandeProduit.quantiteCom=0;
                });
              });
            });
            this.aDejaPasserCommande=1;
          }
          else if (this.aDejaPasserCommande != 0){
            this.CommanderProduitsService.ajouterProduitACommande(produitPharma.produit.code,this.commande.id,this.commandeProduit).subscribe(response=>{
              this.messageSucces="Produit ajouter au panier avec succés!";
              this.titrePopUp="Commander le produit '"+nom+"'";
              this.modalService.open(content).result.then((result) => {
                  this.closeResult = `Closed with: ${result}`;
              }, (reason) => {
                  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
              });
              c('Close click');
              this.commandeProduit.quantiteCom=0;
            });
          }
        }
      
  }


  PasserCommande(){
    this.messageSucces="Votre commande a été passer avec succés!";
    document.getElementById("a").style.display='none';
    this.commandePasser.quantite=this.prixTotal;
    this.date=this.commandePasser.dateLivraison;
    this.jour=this.date.day;
    this.mois=this.date.month;
    this.ans=this.date.year;
    this.commandePasser.dateLivraison=this.jour+"/"+this.mois+"/"+this.ans;
    this.CommanderProduitsService.updateCommande(this.commandePasser).subscribe(response=>{  
    });
  }


 


}
