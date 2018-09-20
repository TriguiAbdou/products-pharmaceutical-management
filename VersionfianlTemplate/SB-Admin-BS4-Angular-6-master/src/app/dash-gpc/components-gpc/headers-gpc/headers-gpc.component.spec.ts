import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersGpcComponent } from './headers-gpc.component';
import { DashGpcModule } from '../../dash-gpc.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('HeadersGpcComponent', () => {
  let component: HeadersGpcComponent;
  let fixture: ComponentFixture<HeadersGpcComponent>;

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
    fixture = TestBed.createComponent(HeadersGpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
