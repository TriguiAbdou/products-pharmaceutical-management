import { DashGpcModule } from './dash-gpc.module';

describe('DashGpcModule', () => {
  let dashGpcModule: DashGpcModule;

  beforeEach(() => {
    dashGpcModule = new DashGpcModule();
  });

  it('should create an instance', () => {
    expect(dashGpcModule).toBeTruthy();
  });
});
