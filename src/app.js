const express = require("express");
const translationController = require("./controllers/translationController");

const app = express();
//parse body
app.use(express.json());

//home url get request
app.get("/", (req, res) => {
  res.status(200).send("hello translator");
});

//translate api post request for translation
app.post("/api/translate", translationController);

//export app
module.exports = app;
