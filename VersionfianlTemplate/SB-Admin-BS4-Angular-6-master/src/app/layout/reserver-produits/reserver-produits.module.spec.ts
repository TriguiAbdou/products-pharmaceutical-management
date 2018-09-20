import { ReserverProduitsModule } from './reserver-produits.module';

describe('ReserverProduitsModule', () => {
  let reserverProduitsModule: ReserverProduitsModule;

  beforeEach(() => {
    reserverProduitsModule = new ReserverProduitsModule();
  });

  it('should create an instance', () => {
    expect(reserverProduitsModule).toBeTruthy();
  });
});
