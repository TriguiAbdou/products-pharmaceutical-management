import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { InfoPharmacieComponent } from './info-pharmacie.component';
import {InfoPharmacieModule} from './info-pharmacie.module';

describe('InfoPharmacieComponent', () => {
  let component: InfoPharmacieComponent;
  let fixture: ComponentFixture<InfoPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfoPharmacieModule,RouterTestingModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
