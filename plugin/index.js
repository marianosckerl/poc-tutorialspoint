const cucumber = require('cypress-cucumber-preprocessor').default
const path = require('path');
module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  on('before:browser:launch', (browser = {}, args) => {
    console.log(config, browser, args);
    if (browser.name === 'chrome') {
      const ignoreXFrameHeadersExtension = path.join(__dirname, '../extensions/ignore-x-frame-headers');
      args.push(args.push(`--load-extension=${ignoreXFrameHeadersExtension}`));
      args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
    }
    return args;
  });
};