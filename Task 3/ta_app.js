const fs = require('fs')
const yargs = require('yargs')

//getting arguments from command line
//console.log(process.argv[2])

//getting arguments using yargs
// console.log(process.argv)
// console.log(yargs.argv)

//Customize the version of yargs
yargs.version('1.1.0')

//createing commands using yargs
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  handler: function () {
    console.log("Adding a new note.")
  }
}).command({
  command: 'remove',
  describe: 'Removing a note.',
  handler: function () {
    console.log("Removing Note.")
  }
}).command({
  command: 'list',
  describe: 'List the notes.',
  handler: function () {
    console.log("Listing notes.")
  }
}).command({
  command: 'read',
  describe: 'Read a note.',
  handler: function () {
    console.log("Reading a Note.")
  }
}).argv

console.log(yargs.argv);
