import { TestBed, inject } from '@angular/core/testing';

import { ReserverProduitsService } from './reserver-produits.service';

describe('ReserverProduitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReserverProduitsService]
    });
  });

  it('should be created', inject([ReserverProduitsService], (service: ReserverProduitsService) => {
    expect(service).toBeTruthy();
  }));
});
