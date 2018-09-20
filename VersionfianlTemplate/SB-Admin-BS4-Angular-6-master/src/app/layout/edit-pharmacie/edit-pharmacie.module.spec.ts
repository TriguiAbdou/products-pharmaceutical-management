import { EditPharmacieModule } from './edit-pharmacie.module';

describe('EditPharmacieModule', () => {
  let editPharmacieModule: EditPharmacieModule;

  beforeEach(() => {
    editPharmacieModule = new EditPharmacieModule();
  });

  it('should create an instance', () => {
    expect(editPharmacieModule).toBeTruthy();
  });
});
