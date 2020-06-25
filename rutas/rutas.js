var express = require('express');
var router = express.Router(); //maneja las rutas
//controladores
router.get('/',c_inicio);
router.get('/about',c_about);
//funciones


function c_inicio(req,res){
    res.render('inicio', {titulo: "PAGINA DE INICIO",
                          nombre: "Jaime",
                          apellido: "Farfan"
                        });
}



function c_about(req,res){
  res.send('ACERDA DE ....V1.0');
}

module.exports =router;