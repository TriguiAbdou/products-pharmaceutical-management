import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Pharmacie} from './../../models/pharmacie.model';
import {EditPharmacieService} from './edit-pharmacie.service';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-pharmacie',
  templateUrl: './edit-pharmacie.component.html',
  styleUrls: ['./edit-pharmacie.component.scss'],
  animations: [routerTransition()]
})
export class EditPharmacieComponent implements OnInit {

  pharmacie: any;

  pharmacieId:number;

   id: number;

   message:String;

   couleur:String;

   closeResult: string;

  constructor(private router: Router,private editPharmacieService : EditPharmacieService,private route: ActivatedRoute,private modalService: NgbModal) { 
    
  }

    ngOnInit() :void {
      this.message= "Vous ne pouvez pas changer le nom ,l'adresse et la région de la pharamacie . Trois champs réservés à l'administrateur";
      this.couleur="alert alert-info";
      this.route.params.forEach((params: Params) => {
        this.pharmacieId = Number.parseInt(params['id']);
        console.log(this.pharmacieId);
      });

      this.editPharmacieService.getPharmacie(this.pharmacieId).subscribe(response=>{
        this.pharmacie=response;
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


  updatePharmacie(content) :void{
      if (this.pharmacie.mail ==""){
        this.message="Le champs mail est obligatoire";
        this.couleur="alert alert-danger";
      }
      else if(this.pharmacie.tel ==""){
        this.message="Le champs telephone est obligatoire";
        this.couleur="alert alert-danger";
      }
      else{
        this.editPharmacieService.updatePharmacie(this.pharmacie).subscribe(response=>{
          console.log("pharmacie edited with success");
          console.log(response);
          this.router.navigate(['/info-pharmacie']);
        }) ;
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    }

}
