const fs = require('fs')
const { type } = require('os')
const { title, argv } = require('process')
const yargs = require('yargs')
const notes = require('./td_functions')

//getting arguments from command line
//console.log(process.argv[2])

//Customize the version of yargs
yargs.version('1.1.0')

//createing commands using yargs
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    notes.addNote(yargs.argv.title, yargs.argv.body)
  }
}).command({
  command: 'remove',
  describe: 'Removing a note.',
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function () {
    notes.removeNote(yargs.argv.title)
  }
}).command({
  command: 'list',
  describe: 'List the notes.',
  handler: function () {
    console.log("Listing notes.")
    notes.getNotes()
  }
}).command({
  command: 'read',
  describe: 'Read a note.',
  handler: function () {
    console.log("Reading a Note.")
  }
}).argv

//console.log(yargs.argv);
yargs.parse()
