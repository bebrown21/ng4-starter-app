import { UdemyAppPage } from './app.po';

describe('udemy-app App', () => {
  let page: UdemyAppPage;

  beforeEach(() => {
    page = new UdemyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
