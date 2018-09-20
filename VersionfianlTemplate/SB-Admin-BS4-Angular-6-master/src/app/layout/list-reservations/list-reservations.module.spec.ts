import { ListReservationsModule } from './list-reservations.module';

describe('ListReservationsModule', () => {
  let listReservationsModule: ListReservationsModule;

  beforeEach(() => {
    listReservationsModule = new ListReservationsModule();
  });

  it('should create an instance', () => {
    expect(listReservationsModule).toBeTruthy();
  });
});
