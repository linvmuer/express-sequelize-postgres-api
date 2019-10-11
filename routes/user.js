const express=require("express");
const router=express.Router();
const model = require('../models/index');
const bcrypt=require('bcrypt');
// TODO: install it first  npm install bcrypt\
// TODO: npm install jsonwebtoken --save
const jwt=require('jsonwebtoken');



//middleware to hanlde errors
const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

//function used by the one who creates the users
router.post('/signup',awaitErorrHandlerFactory(async(req,res,next)=>{
     const {username,password,level}=req.body;
     //query the databse to find if a given user already exists in the database if so return an error
     model.User.findOne({where:{username:username}})
     .then(user=>{
       //// TODO: determine the type of value you want to test that imply the user does not exist
       if(user){
         return res.status(409).json({
           error:true,
           message:'Username already exist use a different username'
         });
       }else{
         //before we have to hash the passwords
         bcrypt.hash(password,10,(err,hash)=>{
             if(err){
               return res.status(500).json({
                 error:err
               });
             }else{
               const user=model.User.create({
                 username:username,
                 password:hash,
                 level:level
               });
               return res.status(201).json({
                 error:false,
                 data:user,
                 message:`$user succesfully created`
               });
             }
         });
       }});
}));
router.post('/login',awaitErorrHandlerFactory(async(req,res,next)=>{

     model.User.findOne({
       where:{username:req.body.username}
     }).then(user=>{
       //if we do not get a user
       if(!user){
         return res.status(401).json({
           error:true,
           message:'Auth Failed'
         })
       }
       //check if the password we get match that in the databse
       bcrypt.compare(req.body.password,user.password,(err,result)=>{
         if(err){
           return res.status(401).json({
             message:'Auth Failed'
           });
         }
         if(result){
           const token=jwt.sign({username:user.username,
                     userId:user.id},
                     process.env.JWT_KEY,
                     {
                       expiresIn:"1h"
                     },
                     )
                 if(req.body.level===user.level){
                   //we have to pass the level data down so as to give appropriate views to user
                   return res.status(200).json({
                     message:'Auth successful',
                     token:token
                   });
                 }else{
                   return res.status(409).json({
                     message:'Auth Failed Error level',

                   });
                 }

         }
         res.status(401).json({
           message:'Auth failed'
         });
       });
     });

}));
router.delete('/:userId',awaitErorrHandlerFactory(async(req,res,netx)=>{
        //just make the username unique
       // TODO: code to do the stated below issues
      //before deleting check if the user exist if no return an error
      model.User.destroy({ where: {
      id: req.params.userId
      }})
      .then(result => result.status(200).json({
          error: false,
          message: 'user has been deleted.'
      }))
      .catch(error => res.status(500).json({
          error: true,
          error: error
      }));
}));


module.exports = router;
