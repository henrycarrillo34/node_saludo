var express = require('express');
var app = express();
var rutas = require('./rutas/rutas.js');

app.use('/', rutas);
app.set ('view engine','ejs');

function c_server(){
    console.log('ESCUCHANDOA UN PUERTO 3000');
}

var server =app.listen(3000,c_server);