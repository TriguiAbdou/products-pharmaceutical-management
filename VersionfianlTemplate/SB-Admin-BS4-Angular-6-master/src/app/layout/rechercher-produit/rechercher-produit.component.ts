import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from '../../models/user.model';
import { RechercherProduitService } from './rechercher-produit.service';
import { Router,Params, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.scss'],
  animations: [routerTransition()]

})
export class RechercherProduitComponent implements OnInit {

  userss:any;

  user:User=new User();

  commandes:any;

  nomProduit:String;

  produitPharmacie:any;

  pharmacieId:number;

  recherche:String;

  closeResult: string;


  constructor(private router:Router,private rechercherProduitService:RechercherProduitService,private route:ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.nomProduit = params['id'];
    });

    this.rechercherProduitService.getUserAllData().subscribe(response=>{
      this.userss=response;
      this.user=this.userss;
      this.rechercherProduitService.findByProduit(this.nomProduit,this.user.pharmacie.region.nom).subscribe(data=>{
        this.produitPharmacie=data;
      });
    });
  }

  reserverProduit(pharma,nb,produitPharma,content){
    this.rechercherProduitService.resreverProduit(pharma,nb,produitPharma).subscribe(data=>{
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });
  }


  rechercherProduit(){
    this.rechercherProduitService.findByProduit(this.recherche,this.user.pharmacie.region.nom).subscribe(data=>{
      this.produitPharmacie=data;
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
}
