const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){

    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:"jb2"

    //         // img:" jk rowling.webp"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:"jk rowling.webp"
    //     },
    //     {
    //         title: 'Pathumayude Aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         img:"Basheer1.jpg"
    //     }
    // ]
    // 2nd router method
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(author){
            res.render("author",{
                // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
                nav,
                title:'Library',
                author
                
        });



        })
          

    });

        
    
    
    // booksRouter.get('/single',function(res,res){
    //     res.send("Hey Iam a Single Book");
    // });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id : id})
        .then(function(author){
            res.render('authorsi',{
                nav,
                title:'Library',
                author
            })

        })
        
    });
    return authorsRouter;
}



module.exports = router;

