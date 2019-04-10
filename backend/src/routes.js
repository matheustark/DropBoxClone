const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/boxController');
const FileController = require('./controllers/fileController');

routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)

routes.post('/boxes/:id/file', multer(multerConfig).single('file'), FileController.store)

module.exports = routes;