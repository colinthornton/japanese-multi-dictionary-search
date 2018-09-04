const cheerio = require('cheerio');

const scrapeWeblioDefinition = (html) => {
  const $ = cheerio.load(html);
  const content = [];

  $('.NetDicHead').each((i, el) => {
    content.push({
      word: $(el).text(),
    });
  });

  $('.NetDicBody').each((i, el) => {
    content[i].definitions = $(el)
      .text()
      .split(/[\u2460-\u2473]/)
      .map(line => line.replace(/(\s\s+)|(\u3000\s+)|(\s\u3000+)|(\u3000\u3000+)/g, ' ').trim())
      .filter(line => line.length > 0);
  });

  return content;
};

module.exports = scrapeWeblioDefinition;
