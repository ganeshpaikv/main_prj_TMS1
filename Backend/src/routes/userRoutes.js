const express=require("express");
const app=express();
//const Authordata=require("../model/Authordata");
const userrouter=express.Router();
const Trainerdata=require('../model/Trainerdata');
const multer=require('multer');
app.use(express.urlencoded({extended:true}));
//const Bookdata=require('../model/Bookdata');
// idgenerate=function(){      
//   Trainerdata.countDocuments({}, function(err, count){
//     if(err){
//       console.log(err);
//    }
//       else{num=count+1;
//     id_final='TN000'+num.toString();  
//     console.log(id_final) 
//      return id_final;
     
//       }
//       });}
      
function router(tokverify,storage){
    coursedata='';
   id_final='';
        
    userrouter.post('/',tokverify,(req,res)=>{
      
        
            
                 let upload = multer({ storage: storage}).single('file');
                 
               upload(req, res,function(err) {
                
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            Trainerdata.find({"email":req.body.email},(err,resp)=>{
              if(resp.length==0){
                   if (!req.file) {
                
                       console.log('Please select an image to upload');
                  }
                else if(err){
                       console.log(err);
                 } 
               else{
                objcourse=JSON.parse(req.body.ictakcourses);
                for(i=0;i<objcourse.length;i++){
                    if(i==0){
                    coursedata=coursedata.concat(objcourse[i].name)}
                    else{
                        coursedata=coursedata.concat(',',objcourse[i].name);
                    }
                }
               var value=Math.floor(Math.random()*1000);
               id_final='TN'+value.toString();
                       var item={
                       name:req.body.name,
                      email:req.body.email,
                       phone:req.body.phone,
                       address:req.body.address,
                     qualification:req.body.qualification,
                     skillset:req.body.skillset,
                      company:req.body.company,
                     designation:req.body.designation,
                      ictakcourses:coursedata,
                        photo:req.file.filename,
                     ID:id_final
                 }
              
                var Trainer=Trainerdata(item);
                Trainer.save();
              
               
            }
          
       
        res.send({message:""});
    }
    else{
        res.send({message:'Trainer already exists.Change email id'});
    }
        
        
     
       
     })
    });
  });
return userrouter;
}
module.exports=router;