const rentData = require('./model.js')


//

module.exports.addMovie = async (req,res) =>{
    try{
        const userMovie = req.body
        await rentData.create(userMovie)      
        res.json({add: userMovie}) 
    }catch{
        res.send("no entra")
    }
}

module.exports.getRent = async (req,res) =>{
    
    try{
        const searchById= await rentData.find({idUser:req.query.idUser}) 
        console.log(searchById)
        res.json({data:searchById})
    }catch{
        res.send({tonto:"error"})
    }
}


