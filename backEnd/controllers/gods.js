const router = require('../routes/gods');
const utilities = require('../utilities/utility');
const db = require('../models');
const God = db.gods;
//const Link = db.link;

getAll = async (req, res) =>{
    const god = await God.findAll();
    res.status(200).json(god);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const god = await God.findByPk(id);
        
        if(god==null || god.length==0){
            throw new Error("Unable to find god with id " + id);
        }
        res.status(200).json(god);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const god = {
        role: req.body.role
    };

    try{
        if (god.role==responsibility){
            throw new Error("Essential fields missing");
        }

        await God.create(god);
        res.status(201).json(god);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await God.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("God deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const god = {
        role: req.body.role
    };

    try{
        if (id==null || god.responsibility==null){
            throw new Error("Essential fields missing");
        }

        await Giant.update(god, {where: {id: id}});
        
        res.status(200).json(god);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};