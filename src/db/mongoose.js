const mongoose = require('mongoose');

//connect mongodb database with server
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connected sucessfully...');
  })
  .catch((err) => {
    console.log('error in database during connection 💥');
  });
