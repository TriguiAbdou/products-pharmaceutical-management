import { TestBed, inject } from '@angular/core/testing';

import { HeadersGpcService } from './headers-gpc.service';

describe('HeadersGpcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersGpcService]
    });
  });

  it('should be created', inject([HeadersGpcService], (service: HeadersGpcService) => {
    expect(service).toBeTruthy();
  }));
});
