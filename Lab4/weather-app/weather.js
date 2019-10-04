const credentials = require('./credentials.js')
const request = require('request')
var local
var local2
const geocode = function (city) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=' + credentials.MAPBOX_TOKEN
    request({ url, json: true }, function (error, response) {

        const data = response.body
        //console.log(data)

        const latitud = {
            latitud: data.features[0].center[0]
        }
        const longitud = {
            longitud: data.features[0].center[1]
        }

        const url = ' https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + longitud.longitud + ',' + latitud.latitud + '?units=si&lang=es'

        request({ url, json: true }, function (error, response) {
            console.log(url)
            const data = response.body
            //console.log(data)
            const info = {
                summary: data.hourly.summary,
                temp: data.currently.apparentTemperature,
                precip: data.currently.precipProbability

            }

            console.log(info.summary)
            console.log('La temperatura actual es de', info.temp + 'ºC')
            console.log('Hay', (info.precip) * 100 + '% probabilidad de lluvia')
        })
    })
}

module.exports = {
    geocode: geocode,
}


