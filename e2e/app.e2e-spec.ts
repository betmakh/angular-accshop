import { ACCSHOPPage } from './app.po';

describe('accshop App', () => {
  let page: ACCSHOPPage;

  beforeEach(() => {
    page = new ACCSHOPPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
