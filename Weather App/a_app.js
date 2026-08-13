const { error } = require('node:console')
const request = require('request')

const url = "https://api.weatherapi.com/v1/current.json?key=d1360ebeaaad424ba12144626261308&q=37.8267,-122.4233"

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current.temp_c)
})