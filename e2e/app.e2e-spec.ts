import { AngTemplatePage } from './app.po';

describe('ang-template App', () => {
  let page: AngTemplatePage;

  beforeEach(() => {
    page = new AngTemplatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
