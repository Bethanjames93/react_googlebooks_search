const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();
const URI = process.env.ATLAS_URI

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}!`);
});