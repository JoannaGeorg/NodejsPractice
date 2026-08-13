const request = require('request')

// const positionURL = "https://api.positionstack.com/v1/forward?access_key=97706ed08033b324d2a6757b17b1cdb6&query=Washington"

// request({ url: positionURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to the position service.")
// } else if (!response.body.data[0].latitude) {
//     console.log("Unable to find location.")
// } else {
//   console.log(response.body.data[0].latitude)
//   console.log(response.body.data[0].longitude)
// }
// })

const geocode = (address, callback) => {
  const url = `https://api.positionstack.com/v1/forward?access_key=97706ed08033b324d2a6757b17b1cdb6&query=${address}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services.', undefined)
    } else if (!response.body.data[0]) {
      callback('Unable to find the location.')
    } else {
      callback(undefined, {latitude: response.body.data[0].latitude, longitude: response.body.data[0].longitude})
    }
  })
}

module.exports = geocode
