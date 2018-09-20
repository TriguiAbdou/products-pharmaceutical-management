import { RechercherProduitModule } from './rechercher-produit.module';

describe('RechercherProduitModule', () => {
  let rechercherProduitModule: RechercherProduitModule;

  beforeEach(() => {
    rechercherProduitModule = new RechercherProduitModule();
  });

  it('should create an instance', () => {
    expect(rechercherProduitModule).toBeTruthy();
  });
});
