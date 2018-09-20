import { CommanderProduitsModule } from './commander-produits.module';

describe('CommanderProduitsModule', () => {
  let commanderProduitsModule: CommanderProduitsModule;

  beforeEach(() => {
    commanderProduitsModule = new CommanderProduitsModule();
  });

  it('should create an instance', () => {
    expect(commanderProduitsModule).toBeTruthy();
  });
});
