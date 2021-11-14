const dataFilms = require('./model.js')

//busqueda de movies
module.exports.searchMovie = async (req, res) => {
    if (req.query) {
        const param = {}
        if (req.query.titulo) param.titulo = req.query.title
        if (req.query.genero) param.genero = req.query.genre
        if (req.query.actores) param.actores = req.query.actor
        const filter = await dataFilms.find(param);
        res.json({ data: filter })
    } else {
        const allMovies = await dataFilms.find()
        res.json({ data: allMovies })
    }
}
//busqueda por id
module.exports.searchMovieById = async (req, res) => {
    const reqMovie = await dataFilms.find({_id:req.params.id })
    res.json({ data: reqMovie })
}
// añadir movies
module.exports.addMovie = async (req, res) => {
    const movie = new dataFilms(req.body)
    await movie.save()
    res.json({ data: movie })
}
//deleteMovies movies
module.exports.deleteMovie = async (req, res) => {
    const deleteMovies = await dataFilms.findOneAndDelete({_id:req.params.id})
    res.json({data:deleteMovies.titulo})
}


