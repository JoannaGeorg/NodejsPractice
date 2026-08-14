const { error } = require('node:console')
const request = require('request')
const geocode = require('./a_geocode')
const forecast = require('./a_forecast')

geocode('Dubai', (error, { longitude, latitude }) => {
  if (error) {
    console.log('Error: ' + error)
  } else {
    console.log('Longitude: ' + longitude + '\nLatitude: ' + latitude)
    forecast(longitude, latitude, (error, { temp_c, chance_of_rain }) => {
      if (error) {
        console.log('Error: ' + error)
      } else {
        console.log(`The current temperature is ${temp_c} degrees Celsius.\nThere is ${chance_of_rain}% chance of rain.`)
      }
    })
  }
})