const request = require('request')

// const url = "https://api.weatherapi.com/v1/current.json?key=d1360ebeaaad424ba12144626261308&q=37.8267,-122.4233"

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to the weather service.")
//   } else if (response.body.error) {
//     console.log("Unable to find location.")
//   } else {
//     console.log(`The current temperature is ${response.body.current.temp_c} degrees Celsius.\nThere is ${response.body.current.chance_of_rain}% chance of rain.`)
//   }
// })

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=d1360ebeaaad424ba12144626261308&q=${longitude},${latitude}`

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather service.', undefined)
    } else if (body.error) {
      callback('Unable to find the location.', undefined)
    } else {
      callback(undefined, body.current)
    }
  })
}

module.exports = forecast