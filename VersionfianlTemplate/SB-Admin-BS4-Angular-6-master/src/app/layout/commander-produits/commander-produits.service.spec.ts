import { TestBed, inject } from '@angular/core/testing';

import { CommanderProduitsService } from './commander-produits.service';

describe('CommanderProduitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommanderProduitsService]
    });
  });

  it('should be created', inject([CommanderProduitsService], (service: CommanderProduitsService) => {
    expect(service).toBeTruthy();
  }));
});
