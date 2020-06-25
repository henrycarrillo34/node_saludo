var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);
app.get('/despedida',c_despedida);

//creando funcion

function c_inicio(request,response){
    response.send('BIENVENIDO EXPRESS-UTEC');
}

//funcion saludo
function c_saludo(request,response){
    response.send('Hola Henry');
}

//funcion despedida
function c_despedida(request,response){
    response.send('Adios Henry');
}

//esta funcion es par levantar el servidor
function c_server(){
    var host =server.address().address;
    var port = server.address().port;
    console.log("ESCUCHANDO EL PUERTO http://%s:%s", host,port); //el %s es para a que alli vaya el host
}

var server = app.listen(3000,c_server);

