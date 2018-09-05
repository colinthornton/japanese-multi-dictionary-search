const express = require('express');
const request = require('request-promise');

const sites = require('../models/sites.model');
const asyncMiddleware = require('../middleware/async.middleware');

const router = express.Router();

router.get('/', asyncMiddleware(async (req, res) => {
  const response = await {
    query: req.query.query,
    results: await Promise.all(sites.map(async site => ({
      site: site.site,
      url: site.url + req.query.query,
      content: site.api
        ? await request({
          uri: encodeURI(`${site.api}${req.query.query}`),
          json: true,
        })
          .then(data => site.scraper(data.data))
          .catch((error) => {
            console.error(error);
            return [];
          })
        : await request(encodeURI(`${site.url}${req.query.query}`))
          .then(html => site.scraper(html))
          .catch((error) => {
            console.error(error);
            return [];
          }),
    }))),
  };

  return res.json(response);
}));

module.exports = router;
