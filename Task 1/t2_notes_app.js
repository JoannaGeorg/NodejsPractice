//loads the core module for file system 'fs'
//const fs = require('fs')

//create and write or replace.
//fs.writeFileSync('notes.txt', 'This is new content.')

//append message
//fs.appendFileSync('notes.txt', '\nSome more stuff.\n\tJust a trial.')

//loading npm module (npm init -> npm i <module_name>)
const validator = require('validator')
const chalk = require('chalk')

//loading from another file.
const utils = require("./t3_utils")
const getNotes = require("./t4_notes")

console.log("main:")
console.log(utils(3, 5))
console.log(getNotes())

console.log(validator.isEmail("john@gmial.com"))

console.log(chalk.green.inverse("SUCESS!"))