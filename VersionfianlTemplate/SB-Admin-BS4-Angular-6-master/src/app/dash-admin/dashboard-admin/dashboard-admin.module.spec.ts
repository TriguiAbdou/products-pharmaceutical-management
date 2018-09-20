import { DashboardAdminModule } from './dashboard-admin.module';

describe('DashboardAdminModule', () => {
  let dashboardAdminModule: DashboardAdminModule;

  beforeEach(() => {
    dashboardAdminModule = new DashboardAdminModule();
  });

  it('should create an instance', () => {
    expect(dashboardAdminModule).toBeTruthy();
  });
});
