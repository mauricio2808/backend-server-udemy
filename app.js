

//Requiris

var express = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//nicializar variables

var app = express(); 


//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//importar rutas
var appRoutes = require('./routes/app'); 
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');


//conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response)=>{

    if(error) throw error;
    console.log('Base de datos, online');

});


//rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);



//escuchar peticiones

app.listen(3000, ()=>{
    console.log('express server puerto 3000 online');
});