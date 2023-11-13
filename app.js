const express = require('express')
const hbs = require('hbs')
const app = express();

require('dotenv').config();


//configuracion de port 
const port = process.env.PORT

//hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')


//SERVIDORES ESTADITICOS
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render("home", {
            nombre: 'Harold Camacho',
            titulo: 'curso de Node'
        })
        // res.render('home')
})

app.get('/elements', function(req, res) {
    res.render("elements", {
        nombre: 'Harold Camacho',
        titulo: 'curso de Node'
    })
})

app.get('/generic', function(req, res) {
    res.render("generic", {
        nombre: 'Harold Camacho',
        titulo: 'curso de Node'
    })
})

app.get('/generic', function(req, res) {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function(req, res) {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

// app.listen(8080)

//con call back
app.listen(port, () => { console.log('Ejemplo del susceso: ', port) })