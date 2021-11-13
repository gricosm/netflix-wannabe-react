const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const moment = require("moment")

module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}
module.exports.compareHash = (passwordPlane, contrasenidb) => {

    let comparacion = bcrypt.compareSync(passwordPlane, contrasenidb)
    return comparacion
}
module.exports.createToken = (user) => {
    const payload = {
        data: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.sign(payload, process.env.PORT)
}
