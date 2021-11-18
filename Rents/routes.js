const router = require('express').Router() // Middleware te sirve para conectar las rutas desde app central.
const controller = require('./controller')
const validationJwt = require('../middleware')

router.post ('/', controller.createRent)
router.get ('/', controller.searchRent)
router.delete ('/', controller.deleteRent)

module.exports = router;