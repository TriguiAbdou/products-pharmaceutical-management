import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import {ReserverProduitsModule} from './reserver-produits.module';
import { ReserverProduitsComponent } from './reserver-produits.component';

describe('ReserverProduitsComponent', () => {
  let component: ReserverProduitsComponent;
  let fixture: ComponentFixture<ReserverProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports :[
       ReserverProduitsModule,
       RouterTestingModule,
       BrowserAnimationsModule,
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
