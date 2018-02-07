import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('acc-root h1')).getText();
  }

  getFooter() {
    return element(by.css('acc-root footer')).getText();
  }
}
