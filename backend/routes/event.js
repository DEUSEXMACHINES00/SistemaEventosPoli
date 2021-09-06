'use strict'
var express = require('express');
var router = express.Router();
var EventController = require('../controllers/event');
var multer = require('multer')
var multParse = multer()


router.post('/save-event', EventController.saveEvent);
router.post('/save-assistant/:id', EventController.saveAssistant);
router.post('/save-comment/:id', EventController.saveComment);
router.post('/save-conferencist/:id', EventController.saveConferencist);
router.get('/get-events', EventController.getEvents);
router.get('/get-event/:id', EventController.getEvent);
router.get('/get-psql', EventController.getPsql);


module.exports = router;