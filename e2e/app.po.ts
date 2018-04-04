import { browser, element, by } from 'protractor/globals';

export class Angular2TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-heroes h1')).getText();
  }
}
