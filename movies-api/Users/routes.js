const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controlador = require('./controller')
// const validacionJwt=require('../middelware')


router.post('/alta',  controlador.crearUsuario ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.post ('/login', controlador.login)
router.get('/:id',  controlador.buscarUsuarios ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.put('/modificar/:id', controlador.cambiarNombre)
router.delete('/eliminar',  controlador.eliminarUsuario)

module.exports=router;

