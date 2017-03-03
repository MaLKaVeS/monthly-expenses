import { MonthlyExpensesPage } from './app.po';

describe('monthly-expenses App', () => {
  let page: MonthlyExpensesPage;

  beforeEach(() => {
    page = new MonthlyExpensesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
