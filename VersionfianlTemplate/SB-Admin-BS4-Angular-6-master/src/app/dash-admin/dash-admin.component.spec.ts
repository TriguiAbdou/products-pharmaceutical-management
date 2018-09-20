import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminComponent } from './dash-admin.component';
import { DashAdminModule } from './dash-admin.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('DashAdminComponent', () => {
  let component: DashAdminComponent;
  let fixture: ComponentFixture<DashAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        DashAdminModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
