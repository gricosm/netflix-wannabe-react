const router = require('express').Router() 
const controlador = require('./controller')
const validacionJwt=require('../middelware')

router.post('/', validacionJwt.verificarToken, controlador.añadir )
router.get('/:id', validacionJwt.verificarToken, controlador.buscarPelicula) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get('/',  controlador.buscarPeliculas ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.delete('/eliminar/:id', controlador.eliminarPelicula)
module.exports=router;
