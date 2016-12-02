import { HotshotsAngularCliDemoPage } from './app.po';

describe('hotshots-angular-cli-demo App', function() {
  let page: HotshotsAngularCliDemoPage;

  beforeEach(() => {
    page = new HotshotsAngularCliDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
