const weblioScraper = require('../services/weblioScraper.service');

const sites = [
  {
    site: 'Weblio',
    url: 'https://www.weblio.jp/content/',
    scraper: weblioScraper,
  },
];

module.exports = sites;
