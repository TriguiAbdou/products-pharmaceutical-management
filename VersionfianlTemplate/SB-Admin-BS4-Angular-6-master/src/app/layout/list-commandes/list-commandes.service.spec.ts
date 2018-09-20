import { TestBed, inject } from '@angular/core/testing';

import { ListCommandesService } from './list-commandes.service';

describe('ListCommandesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCommandesService]
    });
  });

  it('should be created', inject([ListCommandesService], (service: ListCommandesService) => {
    expect(service).toBeTruthy();
  }));
});
