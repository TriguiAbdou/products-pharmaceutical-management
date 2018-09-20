import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DetailsCommandeModule } from './details-commande.module';
import { DetailsCommandeComponent } from './details-commande.component';

describe('DetailsCommandeComponent', () => {
  let component: DetailsCommandeComponent;
  let fixture: ComponentFixture<DetailsCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        BrowserAnimationsModule,
        DetailsCommandeModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
