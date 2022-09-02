
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
        Name: {
          type: String,
          required: true,
        }, 
        Author: {
         type: String,
         required: true,
        },
})



const Book = module.exports = mongoose.model("Book", bookSchema);

module.exports = Book;


