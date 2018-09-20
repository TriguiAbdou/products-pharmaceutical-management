import { TestBed, inject } from '@angular/core/testing';

import { ProdsPharmacieService } from './prods-pharmacie.service';

describe('ProdsPharmacieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdsPharmacieService]
    });
  });

  it('should be created', inject([ProdsPharmacieService], (service: ProdsPharmacieService) => {
    expect(service).toBeTruthy();
  }));
});
