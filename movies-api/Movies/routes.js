const router = require('express').Router() 
const controller = require('./controller')
const validationJwt = require('../middleware')

router.post('/', validationJwt.verifyToken, controller.addMovie )
router.get('/:id', validationJwt.verifyToken, controller.searchMovieById) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get('/',  controller.searchMovie ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.delete('/:id', controller.deleteMovie)

module.exports = router;
