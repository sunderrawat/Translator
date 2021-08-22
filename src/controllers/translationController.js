const translateText = require("./../utils/translation");
const Translation = require("./../model/translationModel");
const translationController = async (req, res) => {
  try {
    const data = req.body;
    const { text, target } = data;
    //translate text from one language to another
    let translation = await translateText(target, text);

    //send success data response to client without any delay for databse caching process
    res.status(200).json({ text, target, translation });
    //translate into multiple languages and save this into database
    if (
      target !== "hi" ||
      target !== "kn" ||
      target !== "ta" ||
      target !== "te"
    ) {
      translation = translation;
    }

    //define multiple translation variables
    let translationHindi,
      translationKannada,
      translationTamil,
      translationTelugu;
      //can't send extra request to server check condition 
    if (target !== "hi") {
      translationHindi = await translateText("hi", text);
    }
    if (target !== "kn") {
      translationKannada = await translateText("kn", text);
    }
    if (target !== "ta") {
      translationTamil = await translateText("ta", text);
    }
    if (target !== "te") {
      translationTelugu = await translateText("te", text);
    }
    //save translation variable 
    target === "hi"
      ? (translation = translationHindi)
      : target === "kn"
      ? (translation = translationKannada)
      : target === "ta"
      ? (translation = translationTamil)
      : target === "te"
      ? (translation = translationTelugu)
      : translation;
    // store data in database model
    const translationData = new Translation({
      targetLng: target,
      inputText: text,
      translation,
      translationHindi,
      translationKannada,
      translationTamil,
      translationTelugu,
    });
    //save data to mongodb database
    await translationData.save();
  } catch (err) {
    //if get an error then send this also
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = translationController;
