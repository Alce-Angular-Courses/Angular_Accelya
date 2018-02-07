import { AppPage } from './app.po';

describe('curso-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toContain('!');
  });

  it('should display app footer', () => {
    page.navigateTo();
    expect(page.getFooter()).toBeTruthy();
  });
});


