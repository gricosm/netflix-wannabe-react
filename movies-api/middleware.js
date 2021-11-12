const jwt = require('jsonwebtoken')
//Verificacion
module.exports.verificarToken = (req, res, next) => {
    try {
        jwt.verify(req.headers.authtoken, process.env.TOKEN)
        next()
    } catch (error) {
        res.json({error: 'Acceso denegado'})
    }
}