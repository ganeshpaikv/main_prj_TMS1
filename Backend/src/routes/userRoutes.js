const express=require("express");
//const Authordata=require("../model/Authordata");
const userrouter=express.Router();
userrouter.use(express.static('./public'));
//const Bookdata=require('../model/Bookdata');
function router(){
    
return userrouter;
}
module.exports=router;