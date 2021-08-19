const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate();

async function translateText(target, text) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  return translations[0];
}

module.exports = translateText;
