const express=require("express");
//const Authordata=require("../model/Authordata");
const userrouter=express.Router();
const Trainerdata=require('../model/Trainerdata');
const multer=require('multer');
//const Bookdata=require('../model/Bookdata');
function router(tokverify,storage){
    userrouter.post('/form',tokverify,(req,res)=>{
        Trainerdata.find({"email":req.body.formData.email},(err,resp)=>{
            if(resp.length==0){
                 var num=Trainerdata.count();
                 let upload = multer({ storage: storage}).single();
        
                upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
    
            
                   if (!req.file) {
                
                       console.log('Please select an image to upload');
                  }
                else if(err){
                       console.log(err);
                 } 
               else{
                       var item={
                        name:req.body.formData.name,
                        email:req.body.formData.email,
                        phone:req.body.formData.phone,
                        address:req.body.formData.address,
                        qualification:req.body.formData.qualification,
                        skillset:req.body.formData.skillset,
                        company:req.body.formData.company,
                        designation:req.body.formData.designation,
                        ictakcourses:req.body.formData.ictakcourses,
                        photo:req.file.filename,
                        ID:'000'+String(num)
                 }
                var Trainer=Trainerdata(item);
                Trainer.save();
            }
        });
    }
    else{
        res.send({message:'Trainer already exists'});
    }
        
        
     
       
     })
    });
return userrouter;
}
module.exports=router;