import { InfoPharmacieModule } from './info-pharmacie.module';

describe('InfoPharmacieModule', () => {
  let infoPharmacieModule: InfoPharmacieModule;

  beforeEach(() => {
    infoPharmacieModule = new InfoPharmacieModule();
  });

  it('should create an instance', () => {
    expect(infoPharmacieModule).toBeTruthy();
  });
});
