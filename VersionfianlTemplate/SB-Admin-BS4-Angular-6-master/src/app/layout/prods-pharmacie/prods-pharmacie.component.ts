import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProdsPharmacieService } from './prods-pharmacie.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prods-pharmacie',
  templateUrl: './prods-pharmacie.component.html',
  styleUrls: ['./prods-pharmacie.component.scss'],
  animations: [routerTransition()]

})
export class ProdsPharmacieComponent implements OnInit {

  pharmacieId:number;

  produitsPharmacie:any;

  pharmacie:any;

  closeResult: string;


  constructor(private router: Router,private route: ActivatedRoute,private prodsPharmacieService:ProdsPharmacieService,private modalService: NgbModal) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.pharmacieId = Number.parseInt(params['id']);
    });

    this.prodsPharmacieService.listeProduitsOfPhamracie(this.pharmacieId).subscribe(response=>{
      this.produitsPharmacie=response;
    });

    this.prodsPharmacieService.findPharmacie(this.pharmacieId).subscribe(data=>{
      this.pharmacie=data;
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

  reserverProduit(nb,produitPharma,content){
    this.prodsPharmacieService.resreverProduit(this.pharmacieId,nb,produitPharma).subscribe(data=>{
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    })
  }

}
