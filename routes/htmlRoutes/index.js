const path = require('path');
const router = require('express').Router();

// Get notes html page
router.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});

// Get index.html page
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

module.exports=router;