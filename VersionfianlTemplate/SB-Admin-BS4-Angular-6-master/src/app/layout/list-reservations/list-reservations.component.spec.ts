import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ListReservationsComponent } from './list-reservations.component';
import { ListReservationsModule} from './list-reservations.module'
describe('ListReservationsComponent', () => {
  let component: ListReservationsComponent;
  let fixture: ComponentFixture<ListReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ListReservationsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
