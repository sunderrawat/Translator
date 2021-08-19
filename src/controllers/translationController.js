const translateText = require("./../utils/translation");
const Translation = require("./../model/translationModel");
const translationController = async (req, res) => {
  try {
    const data = req.body;
    const { text, target } = data;
    //translate text from one language to another
    const translation = await translateText(target, text);
    //store data in model
    const translationData = new Translation({
      targetLng: target,
      inputText: text,
      translation,
    });
    //save data to mongodb database
    await translationData.save();
    //send success data
    res.status(200).json({ text, target, translation });
  } catch (err) {
    //if get an error then send this also
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = translationController;
