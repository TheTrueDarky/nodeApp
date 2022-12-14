const router = require('../routes/characters');
const utilities = require('../utilities/utility');
const db = require('../models');
const Character = db.character;
const Link = db.link;

const Gods = db.gods;
const Demon = db.demon;
const Monsters = db.monsters;
const Mortal = db.mortals;
const Primordials = db.primordials;
const Giants = db.giant;

getAll = async (req, res) =>{
    const character = await Character.findAll({
        include: [{
            model: Demon,
            through: {
                attributes: []
            }
        }, {
            model: Gods,
            through: {
                attributes: []
            }
        },{
            model: Monsters,
            through: {
                attributes: []
            }
        },{
            model: Mortal,
            through: {
                attributes: []
            }
        }, {
            model: Giants,
            through: {
                attributes: []
            }
        },{
            model: Primordials,
            through: {
                attributes: []
            }
        }]
    });
    

    res.status(200).json(character);
}

getByDesc = async (req, res) =>{
    const desc =req.params.value;
    try{
    const character = await Character.findAll(
    {where: {description: desc},
        include: [{
            model: Link,
            required: true}]
    });

    
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
            const character = await Character.findByPk(id,
                //{include: [{model: Link, required: true}]}
                );

            if(character==null || character.length==0){
                throw new Error("Unable to find Character with id " + id);
            }
            res.status(200).json(character);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

create = async (req, res) => {
    const character = {
        first_name: req.body.first_name,
        surname: req.body.surname,
        gender: req.body.gender,
        age: req.body.age,
        deaths: req.body.deaths,
        character_type: req.body.character_type,
        link_id: req.body.link_id,
        auth_notes: req.body.auth_notes,
        comments: req.body.comments
    };

    try{
        if (character.first_name==null || character.gender==null || character.age==null || character.deaths==null){
            throw new Error("Essential fields missing");
        }

        await Character.create(character);

        let jackSparrow = await Character.findAll({
        });

        jackSparrow = jackSparrow[jackSparrow.length - 1];
        

        character.id = jackSparrow.dataValues.id;

        

        res.status(201).json(character);
    }

    catch (error){
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) =>{
    const id =req.params.id;
    try{
        const deleted = await Character.destroy({where: {id: id}});

        if (deleted==0){
            throw new Error("Id not found");
        }

        res.status(200).send("Character deleted");
    }
    catch(error){
        utilities.formatErrorResponse(res,404,error.message);
    }
}

// update = async (req, res) =>{
//     const id =req.body.id;
//     console.log(req.body)

//     const character = {
//         first_name: req.body.first_name,
//         surname: req.body.surname,
//         gender: req.body.gender,
//         age: req.body.age,
//         deaths: req.body.deaths,
//         character_type: req.body.character_type,
//         link_id: req.body.link_id,
//         auth_notes: req.body.auth_notes,
//         comments: req.body.comments
//     };

//     try{
//         if (id==null || character.first_name==null || character.gender==null || character.age==null || character.deaths==null){
//             throw new Error("Essential fields missing");
//         }

//         await Character.update(character, {where: {id: id}});
        
//         res.status(200).json(character);
//     }
//     catch (error){
//         utilities.formatErrorResponse(res, 400, error.message);
//     }
// }

update = async (req, res) => {
    try {
        const id = req.params.id;

        if (id == null) {
            throw new Error("No character id was provided");
        }

        const prev = await Character.findOne({
            where: {
                id: id
            }
        });

        if (prev === null || prev.length == 0) {
            throw new Error("Record could not be updated: invalid ID provided");
        }

        const character = {
            first_name: ('first_name' in req.body) ? req.body.first_name : prev.first_name,
            surname: ('surname' in req.body) ? req.body.surname : prev.surname,
            gender: ('gender' in req.body) ? req.body.gender : prev.gender,
            age: ('age' in req.body) ? req.body.age : prev.age,
            deaths: ('deaths' in req.body) ? req.body.deaths : prev.deaths,
            character_type: ('character_type' in req.body) ? req.body.character_type : prev.character_type,
            link_id: ('link_id' in req.body) ? req.body.link_id : prev.link_id,
            auth_notes: ('auth_notes' in req.body) ? req.body.auth_notes : prev.auth_notes,
            comments: ('comments' in req.body) ? req.body.comments : prev.comments
            
        };
console.log(('surname' in req.body))
        if (id==null || character.first_name==null || character.gender==null || character.age==null || character.deaths==null){
            
            throw new Error("Essential fields missing");
            
        }

        // if (character.cover_art != prev.cover_art) {
        //     await deleteOldGameImage(id);
        // }

        await Character.update(character, { where: { id: id } });

        res.status(200).json(character);
    } catch (error) {
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

module.exports = {getAll, getByDesc, getById, create, deleting, update};