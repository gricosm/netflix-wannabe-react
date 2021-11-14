const mongoose = require('mongoose');

const RentSchema= new mongoose.Schema({
    idUser:{type:Number},
    idMovies:[{type:Number}]
})

module.exports = mongoose.model('Rents', RentSchema)