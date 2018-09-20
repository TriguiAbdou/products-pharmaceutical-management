import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGpcComponent } from './dashboard-gpc.component';
import { DashGpcModule } from '../dash-gpc.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardGpcComponent', () => {
  let component: DashboardGpcComponent;
  let fixture: ComponentFixture<DashboardGpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashGpcModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
