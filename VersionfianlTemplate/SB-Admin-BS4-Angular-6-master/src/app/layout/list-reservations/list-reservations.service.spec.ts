import { TestBed, inject } from '@angular/core/testing';

import { ListReservationsService } from './list-reservations.service';

describe('ListReservationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListReservationsService]
    });
  });

  it('should be created', inject([ListReservationsService], (service: ListReservationsService) => {
    expect(service).toBeTruthy();
  }));
});
