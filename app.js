

//Requiris

var express = require('express'); 
var mongoose = require('mongoose');


//nicializar variables

var app = express(); 

//conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response)=>{

    if(error) throw error;
    console.log('Base de datos, online');

})


//rutas

app.get('/', (request, response, next) =>{

    response.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});


//escuchar peticiones

app.listen(3000, ()=>{
    console.log('express server puerto 3000 online');
});