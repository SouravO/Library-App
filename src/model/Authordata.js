// Accesing mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/library');


// Schema definition
const AuthorSchema = mongoose.Schema;


const SchemaAuthor = new AuthorSchema({
    title: String,
    author: String,
    genre: String,
    image: String
});



// MOdel creation

var Authordata = mongoose.model('authordata',SchemaAuthor);



module.exports = Authordata;