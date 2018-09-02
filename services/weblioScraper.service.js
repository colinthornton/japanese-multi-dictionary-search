const cheerio = require('cheerio');

const scrapeWeblioDefinition = (html) => {
  const $ = cheerio.load(html);
  const definitions = [];

  $('.NetDicHead').each((i, el) => {
    definitions.push({
      word: $(el).text(),
    });
  });

  $('.NetDicBody').each((i, el) => {
    definitions[i].content = $(el)
      .text()
      .replace(/(\s\s+)|(\u3000\s+)|(\s\u3000+)|(\u3000\u3000+)/, '\n');
  });

  return definitions;
};

module.exports = scrapeWeblioDefinition;
