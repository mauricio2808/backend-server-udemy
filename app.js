

//Requiris

var express = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//nicializar variables

var app = express(); 



//CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header( "Access-Control-Allow-Methods", "POST, GET, PUT, DELETE,OPTION")
    next();
  });



//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//importar rutas
var appRoutes = require('./routes/app'); 
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


//conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response)=>{

    if(error) throw error;
    console.log('Base de datos, online');

});

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));



//rutas
app.use('/img', imagenesRoutes);
app.use('/upload', uploadRoutes);
app.use('/medico', medicoRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);


app.use('/', appRoutes);



//escuchar peticiones

app.listen(3000, ()=>{
    console.log('express server puerto 3000 online');
});