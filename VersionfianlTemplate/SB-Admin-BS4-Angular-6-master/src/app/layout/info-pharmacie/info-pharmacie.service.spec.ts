import { TestBed, inject } from '@angular/core/testing';

import { InfoPharmacieService } from './info-pharmacie.service';

describe('InfoPharmacieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPharmacieService]
    });
  });

  it('should be created', inject([InfoPharmacieService], (service: InfoPharmacieService) => {
    expect(service).toBeTruthy();
  }));
});
