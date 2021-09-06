'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = Schema({
    titulo: String,
    descripcion: String,
    categorias: [String],
    fecha: String,
    sede: String,
    lugarEvento: {
        nombre: String,
        direccion: String,
        ciudad: String
    },
    asistentes: [{
        id: String,
        nombreUsuario: String,
        nombreCompleto: String,
        tipoUsuario: String,
        email: String,
        ciudad: {
            nombre: String,
            departamento: String,
            pais: String
        }
    }],
    conferencistas: [{
        id: String,
        nombreUsuario: String,
        nombreCompleto: String,
        tipoUsuario: String,
        email: String,
        ciudad: {
            nombre: String,
            departamento: String,
            pais: String
        }
    }],
    facultadOrganizadora: String,
    programaOrganizado: String,
    comentarios: [{
        idUsuario: String,
        comentario: String
    }]
});

module.exports = mongoose.model('Event', EventSchema);