const express = require('express')
const router = express.Router();
const User = require('../model/User.js')

router.post("/",async(req,res)=>{
 try {
    const data = new User(req.body);
   const user = await data.save();
   res.status(201).json(user)
 } catch (error) {
    console.log("Somthing is Wrong");
    res.status(500).json(error)
 }
})

module.exports = router