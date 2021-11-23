const dataMovie = require('./model.js')

// Búsqueda de película.

module.exports.searchMovie = async (req, res) => {
    if (req.query) {
        const param = {}
        if (req.query.title) param.title = req.query.title
        // if (req.query.genre) param.genre = req.query.genre
        // if (req.query.actors) param.actors = req.query.actors
        const filter = await dataMovie.find(param);
        res.json({ data: filter })
    } else {
        const allMovies = await dataMovie.find()
        res.json({ data: allMovies })
    }
}

// Búsqueda de película por ID.

module.exports.searchMovieById = async (req, res) => {
    const reqMovie = await dataMovie.find({_id:req.params.id })
    res.json({ data: reqMovie })
}

// Añadir película.

module.exports.addMovie = async (req, res) => {
    const movie = new dataMovie(req.body)
    await movie.save()
    res.json({ data: movie })
}

// Borrar película por ID.

module.exports.deleteMovie = async (req, res) => {
    const deleteMovie = await dataMovie.findOneAndDelete({_id:req.params.id})
    res.json({data:deleteMovie.title})
}


