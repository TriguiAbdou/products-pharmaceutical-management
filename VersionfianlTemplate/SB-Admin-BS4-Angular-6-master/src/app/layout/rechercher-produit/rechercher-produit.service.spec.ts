import { TestBed, inject } from '@angular/core/testing';

import { RechercherProduitService } from './rechercher-produit.service';

describe('RechercherProduitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RechercherProduitService]
    });
  });

  it('should be created', inject([RechercherProduitService], (service: RechercherProduitService) => {
    expect(service).toBeTruthy();
  }));
});
