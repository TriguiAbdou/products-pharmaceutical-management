import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RechercherProduitComponent } from './rechercher-produit.component';
import {RechercherProduitModule} from './rechercher-produit.module';

describe('RechercherProduitComponent', () => {
  let component: RechercherProduitComponent;
  let fixture: ComponentFixture<RechercherProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports:[
       RechercherProduitModule,
       RouterTestingModule,
       BrowserAnimationsModule,
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
