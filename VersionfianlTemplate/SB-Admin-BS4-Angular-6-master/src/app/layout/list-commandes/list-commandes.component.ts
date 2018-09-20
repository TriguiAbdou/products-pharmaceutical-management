import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations'
import { Router } from '@angular/router';
import { ListCommandesService } from './list-commandes.service';
import { User } from '../../models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.scss'],
  animations: [routerTransition()]

})
export class ListCommandesComponent implements OnInit {

  userss:any;

  user:User=new User();

  commandes:any;


  closeResult: string;

  constructor(private router:Router,private listCommandesService:ListCommandesService,private modalService: NgbModal) { }

  ngOnInit() {
      this.listCommandesService.getUserAllData().subscribe(response=>{
        this.userss=response;
        this.user=this.userss;
        this.listCommandesService.allCommandeOfPharmacie(this.user.pharmacie.id).subscribe(data=>{
          this.commandes=data;
        });
      });
  }


  confimerLaLivraison(commandelivr,content,contents){
    if(commandelivr.livraison == "oui"){
      this.modalService.open(contents).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    else if(commandelivr.livraison=="non"){
      this.listCommandesService.confirmerlivraison(commandelivr).subscribe(response=>{
        this.listCommandesService.getUserAllData().subscribe(response=>{
          this.userss=response;
          this.user=this.userss;
          this.listCommandesService.allCommandeOfPharmacie(this.user.pharmacie.id).subscribe(data=>{
            this.commandes=data;
            this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
          });
        });
      });
    }  
  }


  onSelect(commandeTo){
    this.router.navigate(['/details-commande',commandeTo.id]);
  }


  trier(id){
    if(id==2){
      this.listCommandesService.listByDateLivraison(this.user.pharmacie.id).subscribe(data=>{
        this.commandes=data;
      })
    }
    else if(id==3){
      this.listCommandesService.listByDateCommande(this.user.pharmacie.id).subscribe(data=>{
        this.commandes=data;
      })
    }
    else if(id==4){
      this.listCommandesService.listByEtat(this.user.pharmacie.id).subscribe(data=>{
        this.commandes=data;
      })
    }
    else if(id==1){
      this.listCommandesService.listByDateCommande(this.user.pharmacie.id).subscribe(data=>{
        this.commandes=data;
      })
    }
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
