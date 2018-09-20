import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations'
import {InfoPharmacieService} from './info-pharmacie.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info-pharmacie',
  templateUrl: './info-pharmacie.component.html',
  styleUrls: ['./info-pharmacie.component.scss'],
  animations: [routerTransition()]
})


export class InfoPharmacieComponent implements OnInit {

  IdPharma :number;

  pharmacie:any;

  constructor(private infoPhamacieService:InfoPharmacieService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() :void {
    this.infoPhamacieService.getUserAllData()
      .subscribe(response=>{
          this.infoPhamacieService.getPharmacie(response)
            .subscribe(response=>{
              this.pharmacie=response
              console.log(response);
      })
    }); 
  }


  onSelect(){
    this.router.navigate(['/edit-pharmacie',this.pharmacie.id]);
  }


  
  



 

}
