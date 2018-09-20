import { DashAdminModule } from './dash-admin.module';

describe('DashAdminModule', () => {
  let dashAdminModule: DashAdminModule;

  beforeEach(() => {
    dashAdminModule = new DashAdminModule();
  });

  it('should create an instance', () => {
    expect(dashAdminModule).toBeTruthy();
  });
});
