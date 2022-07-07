const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');




// Add Book
function router(nav){
    adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title: 'Library',
        books

    })
})


adminRouter.post('/add',function(req,res){

// post method
    var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    }
    

    var book = Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');




    res.send("Hey I'm added");
});



return adminRouter;
}

module.exports = router;

