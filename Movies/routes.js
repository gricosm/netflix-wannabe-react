const router = require('express').Router() 
const controller = require('./controller')

const validationJwt = require('../middleware')


router.post('/', controller.addMovie )
router.get('/:id',  controller.searchMovieById) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get('/',  controller.searchMovie ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.delete('/:id', controller.deleteMovie)

module.exports = router;

