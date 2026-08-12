const fs = require('fs')

function getNotes() {
  const notes = loadNotes()
  console.log(notes)
}

function addNote(title, body) {
  const notes = loadNotes()
  //Checking for dups
  const duplicateNotes = notes.filter(function (note) {
    if (note.title === title) {
      return true
    }
    return false
  })

  if (duplicateNotes.length == 0) {
    notes.push({
      title: title,
      body: body  
    })

    saveNotes(notes)
    console.log("Note Added!")
  } else {
    console.log("Duplicate Note => Not Added.")
  }
}

function saveNotes(notes) {
  const notesJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', notesJSON)
}

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

function removeNote(title) {
  const notes = loadNotes()
  const remainingNotes = notes.filter(function (note) {
    if (note.title === title) {
      return false
    }
    return true
  })

  if (remainingNotes.length == 0) {
    console.log("No note with that Title. No Change.")
  } else {
    saveNotes(remainingNotes)
    console.log("Note Removed!")
  }
}

function readNote(title) {
  const notes = loadNotes()
  const notecontent = notes.filter(function (note) {
    if (note.title === title) {
      return true
    }
    return false
  })

  if (notecontent.length != 0) {
      console.log('Title: ' + notecontent[0].title)
      console.log('Body: ' + notecontent[0].body)
  } else {
    console.log("No note with that title.")
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
}