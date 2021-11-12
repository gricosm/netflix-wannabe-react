const hash = require('./functions')
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nombre:{ type: String, required: true, trim: true, },
    apellidos:{ type: String, required: true },
    edad:{ type: Number, required: true },
    rol:{ type: String, required: true, lowercase: true, },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un mail válido.']
    },
    contrasenia: {
        required: true,
        type: String,
        // minlength: 8, // colocar en el controlador
        set:hash.createHash
    },

}) 

module.exports = mongoose.model('User', userSchema)
