const router = require('../Rents/routes.js')
const rentData = require('./model.js')

module.exports.createRent = async (req, res) => {
    try {
        const newRent = req.body;
        await rentData.create(newRent)
        res.status(200).json({ rent: newRent }); 
    } catch (error) { res.status(400).json({error:"400"}); }
}

module.exports.searchRent = async (req, res) => {
    try {
    const searchById = await rentData.find({ idUser: req.query.idUser })
    res.json({ searchById })
    } catch (error) { res.send({ Mensaje: 'Lo siento ha ocurrido un error de ${error}.' }) }
}

module.exports.deleteRent = async (req, res) => {
    try{
        const eliminate = await rentData.findOneAndDelete({_id: req.params.id})
    }catch{
        res.json({ data: eliminate.id})
    }
}