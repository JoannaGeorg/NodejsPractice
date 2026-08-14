const express = require('express')
const path = require('path')

//call the express function to start the application
const app = express()

//to use the static html file
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

//to select what should be shown to the person on the page (<partial_url>, (request, response) => {} )
//NOTE: The following code will not run with the use of the above static page.
// app.get('', (req, res) => {
//   res.send('Hello!')
// })

app.get('/help', (req, res) => {
  res.send('Hello! This is the Help Page.')
})

app.get('/about', (req, res) => {
  res.send('The About Page.')
})

app.get('/bye', (req, res) => {
  res.send('Good Bye.')
})

//to start the server
app.listen(3000, () => {
  console.log('Server is up on port 3000')
})