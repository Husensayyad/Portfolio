const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/download",(req,res)=>{
  const filepath = path.join(__dirname,'..','public','uploads','resume.pdf');
  console.log("Hello Bhai")
  res.download(filepath,"resume.pdf");
})

router.get("/view",(req,res)=>{
 const filepath = path.join(__dirname,'..','public','uploads','resume.pdf')
 console.log("kese Bhai")
 res.sendFile(filepath,{ headers: { 'Content-Type': 'application/pdf' } })
})

module.exports = router;
