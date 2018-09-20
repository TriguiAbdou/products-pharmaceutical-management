import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdminComponent } from './sidebar-admin.component';
import { DashAdminModule } from '../../dash-admin.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('SidebarAdminComponent', () => {
  let component: SidebarAdminComponent;
  let fixture: ComponentFixture<SidebarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashAdminModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
