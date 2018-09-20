import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import {CommanderProduitsModule} from './commander-produits.module';
import { CommanderProduitsComponent } from './commander-produits.component';

describe('CommanderProduitsComponent', () => {
  let component: CommanderProduitsComponent;
  let fixture: ComponentFixture<CommanderProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommanderProduitsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
