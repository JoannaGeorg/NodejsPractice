const fs = require('fs')

//getting arguments from command line
//console.log(process.argv[2])

console.log(process.argv)

const command = process.argv[2]
if (command === 'add') {
  console.log("Adding note.")
} else if (command === 'remove') {
  console.log("Removing note.")
}
