const { error } = require('node:console')
const request = require('request')

const url = "https://api.weatherapi.com/v1/current.json?key=d1360ebeaaad424ba12144626261308&q=37.8267,-122.4233"

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the weather service.")
  } else if (response.body.error) {
    console.log("Unable to find location.")
  } else {
    console.log(`The current temperature is ${response.body.current.temp_c} degrees Celsius.\nThere is ${response.body.current.chance_of_rain}% chance of rain.`)
  }
})

const positionURL = "https://api.positionstack.com/v1/forward?access_key=97706ed08033b324d2a6757b17b1cdb6&query=Washington"

request({ url: positionURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the position service.")
} else if (!response.body.data[0].latitude) {
    console.log("Unable to find location.")
} else {
  console.log(response.body.data[0].latitude)
  console.log(response.body.data[0].longitude)
}
})