'use strict'

var Event = require('../models/event');
const {Pool } = require('pg');

const config ={
    user : 'postgres',
    host : 'localhost',
    password : 'admin',
    database: 'eventos'

};

const psql = new Pool ( config);

var controller = {

    saveEvent: function(req, res) {

        var event = new Event();

        var params = req.body;
        
        event.titulo = params.titulo;
        event.descripcion = params.descripcion;
        event.categorias = params.categorias;
        event.fecha = params.fecha;
        event.sede = params.sede;
        event.lugarEvento.nombre = params.lugarEvento.nombre;
        event.lugarEvento.direccion = params.lugarEvento.direccion;
        event.lugarEvento.ciudad = params.lugarEvento.ciudad;
        event.facultadOrganizadora = params.facultadOrganizadora;
        event.programaOrganizado = params.programaOrganizado;


        event.save((err, eventStored) => {
            if (err) return res.status(500).send({ err });
            if (!eventStored) return res.status(404).send({ message: "No se ha podido registrar el evento..." });
            return res.status(200).send({ event: eventStored });
        });
    },

    saveAssistant: function(req, res) {

        var event = new Event();

        var params = req.body;
        var idEvento = req.params.id;
        var asistente = {
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
        }
       asistente = params;

       Event.findByIdAndUpdate({ _id: idEvento }, { $push: { asistentes: asistente } }, (err, eventUpdate) => {
            
        if (err) return res.status(500).send({ message: "Error al ingresar  asistentes al evento.." });
        if (!eventUpdate) return res.status(404).send({ message: "No existe evento a ingresar asistentes..." });
        
        return res.status(200).send({asistente : eventUpdate });
    });
    },

    saveComment: function(req, res) {

        var event = new Event();

        var params = req.body;
        var idEvento = req.params.id;
        console.log(idEvento)
        var comentario = {
            idUsuario : String,
            comentario : String
        };
        
        comentario = params;
       

        Event.findByIdAndUpdate({_id:idEvento}, { $push: { comentarios: comentario } }, (err, eventUpdate) => {
            if (err) return res.status(500).send({ message: "Error al ingresar  comentarios al vento.." });
            if (!eventUpdate) return res.status(404).send({ message: "No existe evento a ingresar comentarios..." });
            
            return res.status(200).send({ comentario : eventUpdate });
        });


    },

    saveConferencist: function(req, res) {

        var event = new Event();

        var params = req.body;       
        var idEvento = req.params.id;
        var conferencist = {
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
        }
        conferencist = params;
        
        Event.findByIdAndUpdate({ _id: idEvento }, { $push: { conferencistas: conferencist } }, (err, eventUpdate) => {
            if (err) return res.status(500).send({ message: "Error al ingresar  conferencistas al evento.." });
            if (!eventUpdate) return res.status(404).send({ message: "No existe evento a ingresar conferencistas..." });
           
            return res.status(200).send({ conferencist : eventUpdate });
        });
    },

    getEvents: function(req, res) {

        Event.find({}).exec((err, events) => {
            if (err) return res.status(500).send({ message: "Error al devolver datos.." });
            if (!events) return res.status(404).send({ message: "No hay eventos para mostrar..." });
            return res.status(200).send({ events : events });
        });
    }

    ,

    getPsql : function(req,res) {

        psql.query('select * from eventos.empleados ', function(err, empleadoFind){
            if (err) return res.status(500).send({ message: "Error al consultar  ..." });
            if (empleadoFind.rows[0] == null) return res.status(401).send({ message: "la tabla no existe..." });
            return res.status(200).send({ empleadoFind });
           
        });
        psql.end();

    }
    ,
    getEvent: function(req, res){
        var eventId = req.params.id;
        
        Event.findById(eventId,(err,event)=>{
            if(err) return res.status(500).send({message:"Error al devolver datos..."});
            if(!event) return res.status(404).send({message :"El evento no existe..."});
            return res.status(200).send({event});            
        });        
    }
    

}

module.exports = controller;