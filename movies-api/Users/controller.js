const userData = require('./model.js')
const method = require('./functions')

// Creamos usuario.

module.exports.createUser = async (req, res) => {

  try {
    const userUp = new userData(req.body)
    userUp.rol = 'usuario'
    await userUp.save()
    res.json({ Mensaje: 'Enhorabuena, ya estás registrado.' })
  } catch (error) {
    res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.'})
  }
}

// Buscamos usuario.

module.exports.searchUser = async (req, res) => {
  try {
    const searchById = await userData.find({ _id: req.params.id })
    res.json({ searchById })
  } catch (error) {
    res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.' })
  }
}

// Login usuario.

module.exports.login = async (req, res) => {
  try {
    const checkMail = await userData.findOne({ email: req.body.email })
    const checkPassword = method.compareHash(req.body.checkPassword, checkMail.checkPassword)
    if (checkMail === null || !checkPassword) {
      res.send({ mensaje: 'Error, tu email o conrtraseña son incorrectos,vete a la mierda.' })
    } else { res.json({ data: method.createToken(checkMail) }) }
  } catch (error) {
    res.send({ mensaje: 'Tus datos son incorrectos: ${error}.' })
  }
}

// Cambiar usuario.

module.exports.changeName = async (req, res) => {
  try {
    await userData.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name })
    res.send('El nombre se ha cambiado perfectamente por: ' + req.body.name)
  } catch (error) { res.send({ mensaje: 'Lo siento ha ocurrido un error de ${error}.' }) }
}

// Eliminar usuario.

module.exports.deleteUser = async (req, res) => {
  const eliminate = await userData.findOneAndDelete({ _id: req.params.id })
  res.json({ data: eliminate.name })
}