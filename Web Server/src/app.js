const express = require('express')
const path = require('path')
const { title } = require('process')
const hbs = require("hbs")
const { error } = require('console')

//call the express function to start the application
const app = express()

//creating the path to the html files.
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

//To set up Handlebars with express for dynamic sites.
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    name: 'Joe'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    message: 'pls send help. desperate.',
    name: 'Joe'
  })
})

app.get('/weather', (req, res) => {
  res.send('Good Bye.')
})

//for an error page for a specific route. Eg:-
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: '404 ERROR!',
    errorMsg: 'Help Page not found!',
    name: 'Joe'
  })
})

//for an 404 error page - if any url other than the above are asked for
app.get('*', (req, res) => {
  res.render('error', {
    title: '404 ERROR!',
    errorMsg: 'Page not Found!',
    name: 'Joe'
  })
})

//to start the server
app.listen(3000, () => {
  console.log('Server is up on port 3000')
})