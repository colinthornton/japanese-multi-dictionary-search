const scrapeJishoDefinition = data => data.slice(0, 5).map((entry) => {
  // get words/readings
  const wordsArr = entry.japanese.map((word) => {
    let resultStr = '';
    if (word.word) {
      resultStr += word.word;
      if (word.reading) {
        resultStr += ` 【${word.reading}】`;
      }
      return resultStr;
    }
    if (word.reading) {
      resultStr += word.reading;
    }
    return resultStr;
  });
  const wordsStr = wordsArr.join(', ');

  // get definitions
  const definitions = entry.senses.map((sense) => {
    let resultStr = '';
    if (sense.parts_of_speech.length > 0) {
      resultStr += `(${sense.parts_of_speech.join(', ')}) `;
    }
    resultStr += sense.english_definitions.join('; ');
    return resultStr;
  });

  return {
    word: wordsStr,
    definitions,
  };
});

module.exports = scrapeJishoDefinition;
