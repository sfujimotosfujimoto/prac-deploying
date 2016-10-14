import { PracDeployPage } from './app.po';

describe('prac-deploy App', function() {
  let page: PracDeployPage;

  beforeEach(() => {
    page = new PracDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
