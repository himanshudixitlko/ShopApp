import { MyNg4TestPage } from './app.po';

describe('my-ng4-test App', () => {
  let page: MyNg4TestPage;

  beforeEach(() => {
    page = new MyNg4TestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
