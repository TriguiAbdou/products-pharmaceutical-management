import { TestBed, inject } from '@angular/core/testing';

import { EditPharmacieService } from './edit-pharmacie.service';

describe('EditPharmacieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditPharmacieService]
    });
  });

  it('should be created', inject([EditPharmacieService], (service: EditPharmacieService) => {
    expect(service).toBeTruthy();
  }));
});
