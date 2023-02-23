const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const app = express()
const hbs = require('hbs');


// Ajustes
app.set('port', process.env.PORT || 3700)

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Motor de plantilla
hbs.registerPartials(__dirname + '/views', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Cargar archivos de rutas

const peoplesRoutes = require('./app/routes/peoples')

// Rutas

app.use(peoplesRoutes)




// Inicializar el servidor
app.listen(app.get('port'), () => {
    console.log(`El servidor está inicializado en el puerto ${app.get('port')}`)
})