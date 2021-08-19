const mongoose = require("mongoose");

//create translation schema for mongodb
const translationSchema = new mongoose.Schema({
  targetLng: {
    type: String,
    trim: true,
  },
  inputText: {
    type: String,
    trim: true,
  },
  translation: String,
});

//create model for schema
const Translation = mongoose.model("Translation", translationSchema);

module.exports = Translation;
