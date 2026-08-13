const { error } = require('node:console')
const request = require('request')
const geocode = require('./a_geocode')
const forecast = require('./a_forecast')

geocode('Dubai', (error, response) => {
  if (error) {
    console.log('Error: ' + error)
  } else {
    console.log('Longitude: ' + response.longitude + '\nLatitude: ' + response.latitude)
    forecast(response.longitude, response.latitude, (error, response) => {
      if (error) {
        console.log('Error: ' + error)
      } else {
        console.log(`The current temperature is ${response.temp_c} degrees Celsius.\nThere is ${response.chance_of_rain}% chance of rain.`)
      }
    })
  }
})