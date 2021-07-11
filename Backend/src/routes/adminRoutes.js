const express=require("express");
const Authordata=require("../model/Authordata");
const adminrouter=express.Router();
const multer=require('multer');


adminrouter.use(express.static('./public'));

const Bookdata=require('../model/Bookdata');

function router(tokverify){
    
    
    
    adminrouter.post('/addbook/add',tokverify,(req,res)=>{
       
                var item={
                    title:req.body.book.title,
                    author:req.body.book.author,
                    genre:req.body.book.genre,
                    image:req.body.book.image,
                    desc:req.body.book.desc
                }
                var Book=Bookdata(item);
                Book.save();
           // }
       // });
        
        Bookdata.find()
        .then(function(books){
            res.send(books);
        }); 
        
        
       
     })
     
    

    adminrouter.put('/adbooks/bupdate',tokverify,(req,res)=>{
       
                 const id=req.body._id;
                 
                    title=req.body.title,
                    author=req.body.author,
                    genre=req.body.genre,
                    image=req.body.image,
                      desc=req.body.desc
                
                Bookdata.findByIdAndUpdate({"_id":id},
                                  {$set:{"title":title,
                                  "author":author,
                                  "genre":genre,
                                  "image":image,
                                  "desc":desc
                                  }})
              .then(function(){
                res.send();
              })
                
      

    })
    

    adminrouter.put('/adauthors/aupdate',tokverify,(req,res)=>{
       
    
       const id=req.body._id;
       
        author=req.body.author,
        book=req.body.book,
        genre=req.body.genre,
        image=req.body.image,
          desc=req.body.desc
     
       Authordata.findByIdAndUpdate({"_id":id},
       {$set:{"book":book,
       "author":author,
       "genre":genre,
       "image":image,
       "desc":desc
       }})
      .then(function(){
        res.send();
      })

       

    })
    adminrouter.delete('/adbooks/delete/:id',tokverify,(req,res)=>{
        const id=req.params.id;
       Bookdata.findByIdAndDelete(id,function(err,docs){
          if(err){
              console.log(err);
          }
          else{
              console.log("yes");
          }
       })
           res.send();
           
        })
        adminrouter.delete('/adauthors/delete/:id',(req,res)=>{
            const id=req.params.id;
           Authordata.findByIdAndDelete(id,function(err,docs){
              if(err){
                  console.log(err);
              }
              else{
                  console.log("yes");
              }
           })
               res.send();
            })
    
    adminrouter.post('/addauthor/add',tokverify,(req,res)=>{
       
        
                var item={
                    author:req.body.author.author,
                    book:req.body.author.book,
                    genre:req.body.author.genre,
                    image:req.body.author.image,
                    desc:req.body.author.desc
                }
                var Author=Authordata(item);
               Author.save();
            
        
        
        Authordata.find()
        .then(function(authors){
            res.send(authors)
        })
       
     })
return adminrouter;
}
module.exports=router;