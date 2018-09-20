import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGpcComponent } from './sidebar-gpc.component';
import { DashGpcModule } from '../../dash-gpc.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('SidebarGpcComponent', () => {
  let component: SidebarGpcComponent;
  let fixture: ComponentFixture<SidebarGpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashGpcModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
