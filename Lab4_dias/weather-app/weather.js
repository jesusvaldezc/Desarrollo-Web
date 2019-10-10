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
       // console.log(url)
        request({ url, json: true }, function (error, response) {

            const data = response.body
            //console.log(data)
            const info = {
                summary: data.hourly.summary,
                temp: data.currently.apparentTemperature,
                precip: data.currently.precipProbability,
                lunes_resumen: data.daily.data[0].summary,
                lunes_tempHigh: data.daily.data[0].apparentTemperatureHigh,
                lunes_tempLow: data.daily.data[0].apparentTemperatureLow,
                martes_resumen: data.daily.data[1].summary,
                martes_tempHigh: data.daily.data[1].apparentTemperatureHigh,
                martes_tempLow: data.daily.data[1].apparentTemperatureLow,
                miercoles_resumen: data.daily.data[2].summary,
                miercoles_tempHigh: data.daily.data[2].apparentTemperatureHigh,
                miercoles_tempLow: data.daily.data[2].apparentTemperatureLow,
                jueves_resumen: data.daily.data[3].summary,
                jueves_tempHigh: data.daily.data[3].apparentTemperatureHigh,
                jueves_tempLow: data.daily.data[3].apparentTemperatureLow,
                viernes_resumen: data.daily.data[4].summary,
                viernes_tempHigh: data.daily.data[4].apparentTemperatureHigh,
                viernres_tempLow: data.daily.data[4].apparentTemperatureLow,
                sabado_resumen: data.daily.data[5].summary,
                sabado_tempHigh: data.daily.data[5].apparentTemperatureHigh,
                sabado_tempLow: data.daily.data[5].apparentTemperatureLow,
                domingo_resumen: data.daily.data[6].summary,
                domingo_tempHigh: data.daily.data[6].apparentTemperatureHigh,
                domingo_tempLow: data.daily.data[6].apparentTemperatureLow
            }

            console.log(info.summary)
            console.log('La temperatura actual es de', info.temp + 'ºC')
            console.log('Hay', (info.precip) * 100 + '% probabilidad de lluvia')
            console.log(' ')
            console.log('El lunes sera un día ' + info.lunes_resumen + ' con una maxima de ' + info.lunes_tempHigh +'ºC' +' y una baja de ' + info.lunes_tempLow + 'ºC')
            console.log(' ')
            console.log('El martes sera un día ' + info.martes_resumen + ' con una maxima de ' + info.martes_tempHigh +'ºC' +' y una baja de ' + info.martes_tempLow + 'ºC')
            console.log(' ')
            console.log('El miercoles sera un día ' + info.miercoles_resumen + ' con una maxima de ' + info.miercoles_tempHigh +'ºC' +' y una baja de ' + info.miercoles_tempLow + 'ºC')
            console.log(' ')
            console.log('El jueves sera un día ' + info.jueves_resumen + ' con una maxima de ' + info.jueves_tempHigh +'ºC' +' y una baja de ' + info.jueves_tempLow + 'ºC')
            console.log(' ')
            console.log('El viernes sera un día ' + info.viernes_resumen + ' con una maxima de ' + info.viernes_tempHigh +'ºC' +' y una baja de ' + info.viernes_tempLow + 'ºC')
            console.log(' ')
            console.log('El sabado sera un día ' + info.sabado_resumen + ' con una maxima de ' + info.sabado_tempHigh +'ºC' +' y una baja de ' + info.sabado_tempLow + 'ºC')
            console.log(' ')
            console.log('El domingo sera un día ' + info.domingo_resumen + ' con una maxima de ' + info.domingo_tempHigh +'ºC' +' y una baja de ' + info.domingo_tempLow + 'ºC')




        })
    })
}

module.exports = {
    geocode: geocode,
}


