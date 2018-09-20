import { DetailsCommandeModule } from './details-commande.module';

describe('DetailsCommandeModule', () => {
  let detailsCommandeModule: DetailsCommandeModule;

  beforeEach(() => {
    detailsCommandeModule = new DetailsCommandeModule();
  });

  it('should create an instance', () => {
    expect(detailsCommandeModule).toBeTruthy();
  });
});
