const express = require('express')
const path = require('path')
const { title } = require('process')

//call the express function to start the application
const app = express()

//creating the path to the html files.
const publicDirPath = path.join(__dirname, '../public')

//To set up Handlebars with express for dynamic sites.
app.set('view engine', 'hbs')

//to use the static html file
app.use(express.static(publicDirPath))

//to select what should be shown to the person on the page (<partial_url>, (request, response) => {} )

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Joe'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'pls send help. desperate.'
  })
})

app.get('/weather', (req, res) => {
  res.send('Good Bye.')
})

//to start the server
app.listen(3000, () => {
  console.log('Server is up on port 3000')
})