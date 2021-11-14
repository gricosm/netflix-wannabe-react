const jwt = require('jsonwebtoken')

//Verificación

module.exports.verifyToken = (req, res, next) => {
    try {
        jwt.verify(req.headers.authtoken, process.env.TOKEN)
        next()
    } catch (error) { res.json({error: 'Acceso denegado.'})
    }
}