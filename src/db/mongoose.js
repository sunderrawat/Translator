const mongoose = require("mongoose");

//connect mongodb database with server
// mongoose.connect(process.env.MONGODB_URL, {
mongoose
  .connect("mongodb://127.0.0.1:27017/translation", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connected sucessfully...");
  })
  .catch((err) => {
    console.log("error in database during connection 💥");
  });
