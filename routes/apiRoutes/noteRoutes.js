const createNewNote = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();
const uniqid = require('uniqid');

// get notes
router.get('/notes',(req,res)=>{
    res.json(notes);
});

// add notes
router.post('/notes',(req,res)=>{
    req.body.id=uniqid();

    const note = createNewNote(req.body,notes);

    res.json(note);
});

// delete note
// router.delete('/notes/:id',(req,res)=>{
//     const result = removeById(req.params.id, notes);
    
//     res.json(result);
// }) 

module.exports = router;