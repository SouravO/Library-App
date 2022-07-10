const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const multer  = require('multer')
const upload = multer({ dest: '/public/images' })





// Add Book
function router(nav){
    adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title: 'Library',
        // books

    })
})


adminRouter.post('/add', upload.single('image'), async function(req,res){

// post method
    var item = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.file.filename
    
    }
    // console.log(req.file)

    var book = Bookdata(item);
   await book.save();//saving to database
    res.redirect('/books');




    // res.send("Hey I'm added");
});



return adminRouter;
}

module.exports = router;

