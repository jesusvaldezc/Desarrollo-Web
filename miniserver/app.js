//How to install server
//npm init -y
//npm install express

const express = require('express')

const app = express()

/* const path = require('path')

const publicDir = path.join(__dirname,'public')
app.use(express.static(publicDir))
app.get('/', function (request, response) {
    response.send('Hola mundo')
}) */

//about section
app.get('/about', function (request, response) {
    response.send('<h1>Un about muy interesante</h1>')

})
//JSON
app.get('/misc', function (request, response) {
    response.send({
        dia: 'jueves',
        description: 'casi viernes'
    })
})

//contact section
app.get('/contact', function (request, response) {
    response.send('Contact me :)')

})

//Start server
app.listen(3000, function () {
    console.log('Up and running!')
})

//no section found
app.get('/*', function (request, response) {
    response.send('OOOPS!')

})