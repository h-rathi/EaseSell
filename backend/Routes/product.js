const express=require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Notes=require('../models/Notes');
const router=express.Router();
const auth=require('../middleware/getuser');
const { body, validationResult } = require('express-validator');
// add a note in database
router.get('/addproduct',auth,[body('title',"enter valid name").notEmpty(),
        body('content',"enter min. 5 chars").notEmpty()

],async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }
    try {
        const note=new Notes({user:req.user,content:req.body.content,title:req.body.title,
            tag:req.body.tag
        });
        savednote=await note.save();
        res.json(savednote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error ")
    }
})
