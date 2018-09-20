import { TestBed, inject } from '@angular/core/testing';

import { DetailsCommandeService } from './details-commande.service';

describe('DetailsCommandeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsCommandeService]
    });
  });

  it('should be created', inject([DetailsCommandeService], (service: DetailsCommandeService) => {
    expect(service).toBeTruthy();
  }));
});
