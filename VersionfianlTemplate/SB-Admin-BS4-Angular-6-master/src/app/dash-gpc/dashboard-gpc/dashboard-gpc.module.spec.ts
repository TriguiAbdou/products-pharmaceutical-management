import { DashboardGpcModule } from './dashboard-gpc.module';

describe('DashboardGpcModule', () => {
  let dashboardGpcModule: DashboardGpcModule;

  beforeEach(() => {
    dashboardGpcModule = new DashboardGpcModule();
  });

  it('should create an instance', () => {
    expect(dashboardGpcModule).toBeTruthy();
  });
});
