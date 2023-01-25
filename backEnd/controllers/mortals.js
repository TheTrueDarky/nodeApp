const router = require('../routes/mortals');
const utilities = require('../utilities/utility');
const db = require('../models');
const Mortal = db.mortals;
//const Link = db.link;

getAll = async (req, res) =>{
    const mortal = await Mortal.findAll();
    res.status(200).json(mortal);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const mortal = await Mortal.findByPk(id);
        
        if(mortal==null || mortal.length==0){
            throw new Error("Unable to find mortal with id " + id);
        }
        res.status(200).json(mortal);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const mortal = {
        job: req.body.job
    };

    try{
        if (mortal.job==null){
            throw new Error("Essential fields missing");
        }

        await Mortal.create(mortal);
        res.status(201).json(mortal);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await Mortal.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Mortal deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const mortal = {
        job: req.body.job
    };

    try{
        if (id==null || mortal.job==null){
            throw new Error("Essential fields missing");
        }

        await Mortal.update(mortal, {where: {id: id}});
        
        res.status(200).json(mortal);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};