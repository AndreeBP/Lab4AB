var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Inicio</h1>');
}

function c_clientes(req,res){
    res.send('<h1>Andreé Bonilla</h1><h1>Pedrito</h1><h1>Juan Pablo</h1>');
}

function c_productos(req,res){
    res.send('<h1>Computadora</h1><h1>Laptop</h1><h1>Celular</h1>');
}

function c_server(req,res){
    var host = server.address(),address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(5000,c_server);