import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ProdsPharmacieComponent } from './prods-pharmacie.component';
import {ProdsPharmacieModule} from './prods-pharmacie.module';

describe('ProdsPharmacieComponent', () => {
  let component: ProdsPharmacieComponent;
  let fixture: ComponentFixture<ProdsPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[
        ProdsPharmacieModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
