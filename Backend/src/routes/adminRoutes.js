const express=require("express");
const app=express();
const adminrouter=express.Router();
const multer=require('multer');
const Trainerdata = require("../model/Trainerdata");
const nodemailer = require('nodemailer');
const emp = ['Internal', 'Empanelled','Industry Expert'];


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tmsadmn@gmail.com',
    pass: 'ICTkerala@12'
  }
});

app.use(express.urlencoded({extended:true}));

function router(tokverify){
    
    adminrouter.get('/',function(req,res){
        console.log("Request page");
        Trainerdata.find({"approved":false})
        .then(function(trainers){
            res.send(trainers);
          })

      });

   
    // adminrouter.get('/requests/:id',function(req,res){
    //     const id = req.params.id;
    //    Trainerdata.findOne({_id:id}) 
        
    //     .then(function(trainers){
    //         res.send(trainers);
    //       })

    // });
    
    
    adminrouter.get('/accept/:id',function(req,res){
        
     const id = req.params.id;
     console.log(id);
         var job=Math.floor(Math.random() * (emp.length)) ; 
         console.log(job);
       Trainerdata.findByIdAndUpdate(id,{$set:{"approved":true,
       "employment" :emp[job]} 
       
       })
        .then(function(trainers){
          var mailOptions = {
            from: 'tmsadmn@gmail.com',
             to: trainers.email,
            subject: 'Selected as a Trainer at ICT',
            text: 'Congratulations!! you have been selected as a trainer at ICT.Please find the details below',
            html:`<p>Type of employment:${trainers.employment},Trainer ID:${trainers.ID}</p>`
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
                 res.send(trainers);
               })
     
         });
 
 
    //  adminrouter.get('/requests/delete',function(req,res){
    //            const id = req.params.id;
    //     Trainerdata.deleteOne({_id:id},(err,resp)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         else{

    //           var mailOptions = {
    //             from: 'tmsadmn@gmail.com',
    //              to: req.body.email,
    //             subject: 'Unfortunately you are not selected',
    //             text: 'We are sorry that we cannot hire you at the moment.'
    //           };
    //           transporter.sendMail(mailOptions, function(error, info){
    //             if (error) {
    //               console.log(error);
    //             } else {
    //               console.log('Email sent: ' + info.response);
    //             }
    //           });

    //         }
    //     })
 
    //  });
    
    
    adminrouter.delete('/delete/:id',function(req,res){
               const id = req.params.id;
        Trainerdata.deleteOne({_id:id},(err,resp)=>{
            if(err){
                console.log(err);
            }
            else{
              console.log("deleted successfully");
              var mailOptions = {
                from: 'tmsadmn@gmail.com',
                 to: req.body.email,
                subject: 'Unfortunately you are not selected',
                text: 'We are sorry that we cannot hire you at the moment.'
              };
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

            }
            res.send();
        })
 
     });
    
    
    
    
    
    
    
    
return adminrouter;
}
module.exports=router;
