var defaults = require("./wdio.conf.js").config;
var _ = require("lodash");

var overrides = {

  specs: [
      './tests/e2e/specs/**/**.spec.js'
  ],

  maxInstances: 10,

  capabilities: [
      {
          browserName: 'chrome',
          maxInstances:5,
          'goog:chromeOptions': {
              args: ["--headless", "--disable-gpu", "--window-size=1536,864"],
              prefs: {
                  'intl.accept_languages': 'en'
              }
          }
      },
  ],
  services: ['selenium-standalone', 'intercept'],
};
// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);
