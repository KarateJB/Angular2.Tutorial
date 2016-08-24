import { Demo20160820Page } from './app.po';

describe('demo20160820 App', function() {
  let page: Demo20160820Page;

  beforeEach(() => {
    page = new Demo20160820Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
