import { HeadersGpcModule } from './headers-gpc.module';

describe('HeadersGpcModule', () => {
  let headersGpcModule: HeadersGpcModule;

  beforeEach(() => {
    headersGpcModule = new HeadersGpcModule();
  });

  it('should create an instance', () => {
    expect(headersGpcModule).toBeTruthy();
  });
});
