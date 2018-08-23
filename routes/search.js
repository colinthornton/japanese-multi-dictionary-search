const express = require('express');
const cheerio = require('cheerio');
const request = require('request-promise');

const sites = require('../sites');

const router = express.Router();

const scrapeDefinition = (html, wordClass, definitionClass) => {
  const $ = cheerio.load(html);
  const definitions = [];

  $(wordClass).each((i, el) => {
    definitions.push({
      word: $(el).text(),
    });
  });

  $(definitionClass).each((i, el) => {
    definitions[i].definition = $(el)
      .text()
      .replace(/(\s\s+)|()/);
  });

  return definitions;
};

router.get('/', async (req, res) => {
  const query = req.query.query;

  const definitions = await Promise.all(sites.map(site =>
    request(encodeURI(`${site.url}${query}`))
      .then(html =>
        scrapeDefinition(
          html,
          site.wordHtmlClass,
          site.definitionHtmlClass
        )
      )
      .catch(error => console.log(error))
  ));

  const result = {
    query,
    urls: sites.map(site => `${site.url}${query}`),
    definitions,
  };

  res.json(result);
});

module.exports = router;
