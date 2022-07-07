const express = require('express');
const adminauthorRouter = express.Router();
const Authordata = require('../model/Authordata');





function routerAuthor(nav){
    adminauthorRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title: 'Library',
    })
})


adminauthorRouter.post('/addauthor',function(req,res){

// post method
    var itemA = {
        author: req.body.author,
        genre: req.body.genre,
        title: req.body.title,
        image: req.body.image
    }
    

    var book = Authordata(itemA);
    book.save();//saving to database
    res.redirect('/author');




    res.send("Hey I'm added");
});

return adminauthorRouter;
}
module.exports = routerAuthor;


