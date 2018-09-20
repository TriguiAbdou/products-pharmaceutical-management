import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { EditPharmacieComponent } from './edit-pharmacie.component';
import {EditPharmacieModule} from './edit-pharmacie.module';



describe('EditPharmacieComponent', () => {
  let component: EditPharmacieComponent;
  let fixture: ComponentFixture<EditPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        EditPharmacieModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
