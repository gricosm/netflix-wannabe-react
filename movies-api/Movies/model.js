const mongoose = require('mongoose');
const EsquemaPelicula= new mongoose.Schema({
    titulo:{type:String, require},
    director:[{type:String}],
    genero:[{type:String}],
    duracion:{type:Number},
    actores:[{type:String},{type:String},{type:String}],
})
module.exports=mongoose.model('Movies', EsquemaPelicula)