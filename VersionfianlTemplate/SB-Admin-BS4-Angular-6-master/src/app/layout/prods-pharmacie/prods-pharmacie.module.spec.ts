import { ProdsPharmacieModule } from './prods-pharmacie.module';

describe('ProdsPharmacieModule', () => {
  let prodsPharmacieModule: ProdsPharmacieModule;

  beforeEach(() => {
    prodsPharmacieModule = new ProdsPharmacieModule();
  });

  it('should create an instance', () => {
    expect(prodsPharmacieModule).toBeTruthy();
  });
});
