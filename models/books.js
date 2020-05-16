const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    authors: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
});

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;
