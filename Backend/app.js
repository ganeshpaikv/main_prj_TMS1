const express=require("express");
const app=express();
const Bcrypt=require('bcryptjs');
const path=require('path');
const cors=require('cors');
const jwt=require('jsonwebtoken');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
const PORT=process.env.PORT||3000;
const Userdata=require('./src/model/Userdata');
//Token function for verification//
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//Router declarations//
const userrouter=require("./src/routes/userRoutes")()
const adminrouter=require("./src/routes/adminRoutes")(verifyToken)
//signup call for backend//
app.post('/signup',function(req,res){
  pass_hash = Bcrypt.hashSync(req.body.User.password, 10); //password hashing//
  
  Userdata.find({"email":req.body.User.email},(err,resp)=>{
      if(resp.length==0){
          if(req.body.User.email=="admin@gmail.com")
         { var item={
             
              password:pass_hash,
             email:req.body.User.email,
              userCategory:"admin"
          }}
          else{
              var item={
                  
                  password:pass_hash,
                 email:req.body.User.email,
                  userCategory:"trainer"
              }
          }
          var User=Userdata(item);
          User.save();

          res.send({message:"User registered successfully"});
          
      }
      else{
          res.send({message:"User already registered.Please use different username"});
          
      }

  
  })

  })


 app.post('/login',function(req,res){
      pass_hash = Bcrypt.hashSync(req.body.User.password, 10);
      var email = req.body.User.email;
      var password = req.body.User.password;
      var query = {email: email, password: password};

      var item ={
          
      email: req.body.User.email,
      password: req.body.User.password
          
            }

    

       Userdata.findOne(query,function(err,user) {

        if(err) throw new Error(err);
        if(!user) 
          res.send('Invalid Credentials');
        else {
          console.log('Found!');
          if(req.body.User.email=='admin@gmail.com'){
//             res.redirect('/admin');

          }
          else{
//             res.redirect('/user');

          }
          
        }


        });
     
     });


app.listen(3000);
