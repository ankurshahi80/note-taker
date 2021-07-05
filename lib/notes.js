const fs = require("fs");
const path = require("path");

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray,null,2)
    );
    return note;
}

// function removeById (id, notesArray) {
//     const newNotesArray = notesArray.filter(note => note.id !==id);
//     console.log(newNotesArray);
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify(newNotesArray,null,2)
//     );
//     return newNotesArray;
// }

module.exports = createNewNote;