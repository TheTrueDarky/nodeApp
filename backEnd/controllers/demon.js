const router = require('../routes/demon');
const utilities = require('../utilities/utility');
const db = require('../models');
const Demon = db.demon;
//const Link = db.link;

getAll = async (req, res) =>{
    const demon = await Demon.findAll();
    res.status(200).json(demon);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const demon = await Demon.findByPk(id);
        
        if(demon==null || demon.length==0){
            throw new Error("Unable to find demon with id " + id);
        }
        res.status(200).json(demon);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const demon = {
        demon_type: req.body.demon_type,
        ability: req.body.ability
    };

    try{
        if (demon.demon_type==null || demon.ability==null){
            throw new Error("Essential fields missing");
        }

        await Demon.create(demon);
        res.status(201).json(demon);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await Demon.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Demon deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const demon = {
        demon_type: req.body.demon_type,
        ability: req.body.ability
    };

    try{
        if (id==null || demon.demon_type==null || demon.ability==null){
            throw new Error("Essential fields missing");
        }

        await Demon.update(demon, {where: {id: id}});
        
        res.status(200).json(demon);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};