const router = require('../routes/link');
const utilities = require('../utilities/utility');
const db = require('../models');
const Link = db.link;

const Gods = db.gods;
const Demon = db.demon;
const Monsters = db.monsters;
const Mortal = db.mortals;
const Primordials = db.primordials;
const Giants = db.giant;


getAll = async (req, res) =>{
    const link = await Link.findAll({
        include: [{
            model: Demon,
        }, {
            model: Gods
        },{
            model: Monsters
        },{
            model: Mortal
        }, {
            model: Giants
        },{
            model: Primordials
        }]
    });
    res.status(200).json(link);
}

getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const link = await Link.findByPk(id, {
            include: [{
                model: Demon,
            }, {
                model: Gods
            },{
                model: Monsters
            },{
                model: Mortal
            }, {
                model: Giants
            },{
                model: Primordials
            }]
        });
        
        if(link==null || link.length==0){
            throw new Error("Unable to find link with id " + id);
        }
        res.status(200).json(link);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

module.exports = {getAll, getById};