const router = require('../routes/monsters');
const utilities = require('../utilities/utility');
const db = require('../models');
const Monster = db.monsters;
//const Link = db.link;

getAll = async (req, res) =>{
    const monster = await Monster.findAll();
    res.status(200).json(monster);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const monster = await Monster.findByPk(id);
        
        if(monster==null || monster.length==0){
            throw new Error("Unable to find monster with id " + id);
        }
        res.status(200).json(monster);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const monster = {
        monster_type: req.body.monster_type,
        abilities: req.body.abilities 
    };

    try{
        if (monster.monster_type==null || monster.abilities==null){
            throw new Error("Essential fields missing");
        }

        await Monster.create(monster);
        res.status(201).json(monster);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await Monster.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Monster deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const monster = {
        monster_type: req.body.monster_type,
        abilities: req.body.abilities
    };

    try{
        if (id==null || monster.monster_type==null || monster.abilities==null){
            throw new Error("Essential fields missing");
        }

        await Monster.update(monster, {where: {id: id}});
        
        res.status(200).json(monster);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};