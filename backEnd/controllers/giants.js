const router = require('../routes/giants');
const utilities = require('../utilities/utility');
const db = require('../models');
const Giant = db.giant;
//const Link = db.link;

getAll = async (req, res) =>{
    const giant = await Giant.findAll();
    res.status(200).json(giant);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const giant = await Giant.findByPk(id);
        
        if(giant==null || giant.length==0){
            throw new Error("Unable to find giant with id " + id);
        }
        res.status(200).json(giant);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const giant = {
        role: req.body.role
    };

    try{
        if (giant.role==null){
            throw new Error("Essential fields missing");
        }

        await Giant.create(giant);
        res.status(201).json(giant);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await Giant.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Giant deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const giant = {
        role: req.body.role
    };

    try{
        if (id==null || giant.role==null){
            throw new Error("Essential fields missing");
        }

        await Giant.update(giant, {where: {id: id}});
        
        res.status(200).json(giant);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};