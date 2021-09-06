'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user:user@cluster0.utby1.mongodb.net/PFBD2?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conexion a la base de datos establecida satisfactoriamente...");

        //creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo en url: localhost:3700 ...");
        });
    })
    .catch(err => console.log("Error al conectarse a la bd =>" + err));