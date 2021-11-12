const router = require('express').Router() 
const controller = require('./controller')
const validacionJwt=require('../middelware')

router.post('/', validacionJwt.verificarToken, controller.añadir )
router.get('/:id', validacionJwt.verificarToken, controller.buscarPelicula) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get('/',  controller.buscarPeliculas ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.delete('/eliminar/:id', controller.eliminarPelicula)
module.exports=router;
