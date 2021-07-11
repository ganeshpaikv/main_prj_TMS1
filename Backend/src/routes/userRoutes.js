const express=require("express");
const Authordata=require("../model/Authordata");
const userrouter=express.Router();
userrouter.use(express.static('./public'));
const Bookdata=require('../model/Bookdata');
function router(){
    userrouter.get('/',function(req,res){
        //res.sendFile(__dirname+"/src/views/index.html");
        res.send();
    });
    userrouter.get('/books',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.send(books);
               
        });
        
    });
    
    userrouter.get('/books/:id',(req,res)=>{
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.send(book);
        });
        
        });
       
   
    userrouter.get('/authors',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.send(authors);
        })
        
    });
    
    userrouter.get('/authors/:id',(req,res)=>{
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.send(author);
        })
    });
return userrouter;
}
module.exports=router;