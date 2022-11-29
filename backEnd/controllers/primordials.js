const router = require('../routes/primordials');
const utilities = require('../utilities/utility');
const db = require('../models');
const Primordial = db.primordials;
//const Link = db.link;

getAll = async (req, res) =>{
    const primordial = await Primordial.findAll();
    res.status(200).json(primordial);
}
    



getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const mortal = await Primordial.findByPk(id);
        
        if(primordial==null || primordial.length==0){
            throw new Error("Unable to find mortal with id " + id);
        }
        res.status(200).json(primordial);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const primordial = {
        department: req.body.department
    };

    try{
        if (primordial.department==null){
            throw new Error("Essential fields missing");
        }

        await Primordial.create(primordial);
        res.status(201).json(primordial);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.body.id;
    try{
        const deleted = await Primordial.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Primordial deleted");
    }
    catch(error){
        utilities.formatErrorResponseq(res,404,error.message);
    }
}

update = async (req, res) =>{
    const id =req.body.id;

    const primordial = {
        department: req.body.department
    };

    try{
        if (id==null || primordial.department==null){
            throw new Error("Essential fields missing");
        }

        await Primordial.update(primordial, {where: {id: id}});
        
        res.status(200).json(primordial);
    }
    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getById, create, deleting, update};