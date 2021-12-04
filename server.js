const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
//test
const app = express();

//middleware to parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using the public folder
app.use(express.static("public"));
app.use(routes);

//connect to mongo database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//attaching the port and the app
app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`);
})
