const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();
const moviesRoutes = require('./Movies/routes')
const userRoutes = require('./Users/routes')
const rentRoutes = require('./Rents/routes')

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/backend_netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a la BBDD.'))
    .catch((e) => console.log(e))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
      });
      
app.use('/user', userRoutes)
app.use('/movies', moviesRoutes)
app.use('/rent', rentRoutes)

app.listen(process.env.PORT, () => console.log('Funcionando'))
console.log(process.env.PORT)