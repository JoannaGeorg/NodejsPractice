//loads the core module for file system 'fs'
const fs = require('fs')

//create and write or replace.
//fs.writeFileSync('notes.txt', 'This is new content.')

//append message
fs.appendFileSync('notes.txt', '\nSome more stuff.\n\tJust a trial.')