const fs = require('fs');
const path = require('path');
const express = require('express');
const notes = require('./db/db.json');
const app = express();
const uniqid = require('uniqid');

const PORT = process.env.PORT || 3001

// Middleware
// Parse incoming string or array data
app.use(express.urlencoded({extended:true}));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray,null,2)
    );
    return note;
}

// get notes
app.get('/api/notes',(req,res)=>{
    res.json(notes);
});

// add notes
app.post('/api/notes',(req,res)=>{
    req.body.id=uniqid();

    const note = createNewNote(req.body,notes);

    res.json(note);
});

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