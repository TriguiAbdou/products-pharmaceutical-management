import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGpcComponent } from './dash-gpc.component';
import { DashGpcModule } from './dash-gpc.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('DashGpcComponent', () => {
  let component: DashGpcComponent;
  let fixture: ComponentFixture<DashGpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        DashGpcModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashGpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
