const map = require('./weather.js')

map.geocode('Monterrey', function (error, data) {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})
