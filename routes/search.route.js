const express = require('express');
const request = require('request-promise');

const sites = require('../models/sites.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const query = req.query.query;
  const response = await {
    query,
    results: await Promise.all(sites.map(async site => ({
      site: site.site,
      url: site.url + query,
      definitions: await request(encodeURI(`${site.url}${query}`))
        .then(html => site.scraper(html))
        .catch(error => console.log(error))
    })))
  };

  res.json(response);
});

module.exports = router;
