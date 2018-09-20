import { ListCommandesModule } from './list-commandes.module';

describe('ListCommandesModule', () => {
  let listCommandesModule: ListCommandesModule;

  beforeEach(() => {
    listCommandesModule = new ListCommandesModule();
  });

  it('should create an instance', () => {
    expect(listCommandesModule).toBeTruthy();
  });
});
