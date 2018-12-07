// Require mongoose in here.

// book.js
const 
    mongoose = require ('mongoose'),
    Schema = mongoose.Schema;

    // CREATE Book Schema for BOOK COLLECTION
const BookSchema = new Schema({
        title: String,
        author: String,
        image: String,
        releaseDate: Date
    }, {timestamps: true});

// MAKE THIS A MODEL
const Book = mongoose.model('Book', BookSchema);

// MAKE AVAILABLE FOR EXPORT
module.exports = Book;
