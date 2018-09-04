const weblioScraper = require('../services/weblioScraper.service');
const jishoScraper = require('../services/jishoScraper.service');

const sites = [
  {
    site: 'Weblio辞書',
    url: 'https://www.weblio.jp/content/',
    scraper: weblioScraper,
  },
  {
    site: 'Jisho.org',
    api: 'https://jisho.org/api/v1/search/words?keyword=',
    url: 'https://www.jisho.org/search/',
    scraper: jishoScraper,
  },
];

module.exports = sites;
