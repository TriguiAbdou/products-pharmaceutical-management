import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ListCommandesComponent } from './list-commandes.component';
import {ListCommandesModule} from './list-commandes.module';

describe('ListCommandesComponent', () => {
  let component: ListCommandesComponent;
  let fixture: ComponentFixture<ListCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ListCommandesModule,RouterTestingModule,BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
