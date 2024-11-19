const express=require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User=require('../models/Login');
const router=express.Router();
const auth=require('../middleware/getuser');
// create a new user  no auth required

router.post('/createuser',[body('name',"enter valid name").notEmpty().escape(),
    body('email',"enter valid email").notEmpty().isEmail().normalizeEmail(),
    body('password',"enter min. 8 chars").notEmpty().isLength({ min: 8 })
], async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        console.log(result.array())
        return res.status(400).json({ error: result.array()[0].msg });
      }
    try {
    let user1= await User.findOne({email:req.body.email});
    if (user1){
        return res.status(400).json({error:"sorry a user with this email already exists"});
    }else{
        
        let salt = await bcrypt.genSaltSync(10);
        let hash = await bcrypt.hash(req.body.password, salt);
        // let authtoken=jwt.sign(data, 'shhhhh');
      User.create({
        name: req.body.name,
        password: hash,
        email:req.body.email
    })
    .then(user => res.json({status:"user created",token:jwt.sign(user.id, 'shhhhh')}))
    .catch(err => res.status(500).json({ error: 'error while creating user', details: err }));
}
}
catch (error) {
        console.error(error.message);
        res.status(500).json({error:"internal server error "})
}
    
})
// path /api/auth/login  
//login existing user and get  a token  
router.post('/login',[
    body('email',"enter valid email").notEmpty().isEmail().normalizeEmail(),
    body('password',"password cant be empty").notEmpty().exists()
], async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array()[0].msg });
      }
    try {
    let user= await User.findOne({email:req.body.email});
    if (!user){
        return res.status(400).json({error:"Check your credentials and try again"});
    }
    let pass=await bcrypt.compare(req.body.password,user.password)
    if (!pass){
        return res.status(400).json({error:"check credentials and try again"})
    }
    res.json({status:"user logged in",token:jwt.sign(user.id, 'shhhhh')})
     
}
catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error ")
}})

// path /api/auth/getuser  verify the token and return user details except password    
router.post('/getuser',auth, async (req,res)=>{
    try {
        let userId=req.user;
        console.log(userId)
        const user=await User.findById(userId).select('-password')
    res.json(user)
     
}
catch (error) {
        // console.error(error.message);
        res.status(500).send("internal server error ")
}})
module.exports=router;