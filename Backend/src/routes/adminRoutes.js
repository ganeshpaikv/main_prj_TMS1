const express=require("express");
const app=express();
const adminrouter=express.Router();
const multer=require('multer');
const Trainerdata = require("../model/Trainerdata");

app.use(express.urlencoded({extended:true}));

function router(tokverify){
    
    adminrouter.get('/requests',function(req,res){
        console.log("Request page");
        Trainerdata.find({"approved":false})
        .then(function(trainers){
            res.send(trainers);
          })

      });

   
    adminrouter.get('/requests/:id',function(req,res){
        
       Trainerdata.findOne({_id:id}) 
        
        .then(function(trainers){
            res.send(trainers);
          })

    });
    
    
return adminrouter;
}
module.exports=router;
