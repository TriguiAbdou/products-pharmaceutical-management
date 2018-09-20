import { TestBed, inject } from '@angular/core/testing';

import { HeaderAdminService } from './header-admin.service';

describe('HeaderAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderAdminService]
    });
  });

  it('should be created', inject([HeaderAdminService], (service: HeaderAdminService) => {
    expect(service).toBeTruthy();
  }));
});
