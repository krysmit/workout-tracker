const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

//middleware to parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using the public folder
app.use(express.static("public"));

//connect to mongo database
mongoose.connect(process.env.MONGODB)

//attaching the port and the app
app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`);
})
