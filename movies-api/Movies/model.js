const mongoose = require('mongoose');
const MovieSchema= new mongoose.Schema({
    title:{type:String, require},
    director:[{type:String}],
    genre:[{type:String}],
    duration:{type:Number},
    actors:[{type:String},{type:String},{type:String}],
})
module.exports=mongoose.model('Movies', MovieSchema)