const router = require('express').Router() // Middleware te sirve para conectar las rutas desde app central.
const controller = require('./controller')
const validationJwt = require('../middleware')

module.exports = router;