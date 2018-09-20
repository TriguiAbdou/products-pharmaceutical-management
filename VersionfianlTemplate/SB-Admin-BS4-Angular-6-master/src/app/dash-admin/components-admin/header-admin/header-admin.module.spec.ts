import { HeaderAdminModule } from './header-admin.module';

describe('HeaderAdminModule', () => {
  let headerAdminModule: HeaderAdminModule;

  beforeEach(() => {
    headerAdminModule = new HeaderAdminModule();
  });

  it('should create an instance', () => {
    expect(headerAdminModule).toBeTruthy();
  });
});
