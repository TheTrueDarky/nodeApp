const router = require('../routes/characters');
const utilities = require('../utilities/utility');
const db = require('../models');
const Character = db.character;

getAll = async (req, res) =>{
    const character = await Character.findAll();


    res.status(200).json(tool);
}

getByDesc = async (req, res) =>{
    const desc =req.params.value;
    try{
    const character = await Character.findAll(
    {where: {description: desc}});
    
    if(character.length==0){
        throw new Error("Unable to find character with description " + desc);
    }
    res.status(200).json(character);
    }
    catch(error){
    utilities.formatErrorResponse(res,400,error.message);
 }
}

getById = async (req, res) =>{
    const id =req.params.id;
    try {
            const character = await Character.findByPk(id);

            if(character==null || character.length==0){
                throw new Error("Unable to find Character with id " + id);
            }
            res.status(200).json(character);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

module.exports = {getAll, getByDesc, getById};