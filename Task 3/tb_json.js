const fs = require('fs')

// const book = {
//   title: 'One Piece',
//   author: 'Oda Eichiro'
// }

// const bookJSON = JSON.stringify(book)
// //writing to file
// fs.writeFileSync('tc_json.json', bookJSON)

//Reading a file
const dataBuffer = fs.readFileSync('tc_json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.author)

data.author = 'Oda Eiichiro'

const newJSON = JSON.stringify(data)
fs.writeFileSync('tc_json.json', newJSON)
