const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.static('public'));

// Get notes html page
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});

// Get index.html page
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
app.listen(PORT,()=>{
    console.log(`API server now on port 3001`);
})