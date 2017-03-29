import { BikesPage } from './app.po';

describe('bikes App', () => {
  let page: BikesPage;

  beforeEach(() => {
    page = new BikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
