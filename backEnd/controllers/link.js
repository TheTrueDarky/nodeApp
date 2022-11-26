const router = require('../routes/link');
const utilities = require('../utilities/utility');
const db = require('../models');
const Link = db.link;
getAll = async (req, res) =>{
    const link = await Link.findAll();
    res.status(200).json(link);
}

getById = async (req, res) =>{
    const id =req.params.id;
    try{
        const toolCategory = await ToolCategory.findByPk(id);
        
        if(toolCategory==null || toolCategory.length==0){
            throw new Error("Unable to find Tool with id " + id);
        }
        res.status(200).json(toolCategory);
    }

    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

module.exports = {getAll, getById};