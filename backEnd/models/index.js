const config = require("../config/config");
const Character = require("././characters");
const Link = require("./link");
const Demon = require("./demon");
const Giant = require("./giants"); // There be Giants!!!
const God = require("./gods"); 
const Monster = require("./monsters");
const Mortal = require("./mortals"); //primordials
const Primordial = require("./primordials");

const Sequelize = require("sequelize");
//const characters = require("././characters");
const sequelize = new Sequelize(
 config.DB,
 config.USER,
 config.PASSWORD, {
 host: config.HOST,
 dialect: config.dialect,
 port: config.PORT
});

sequelize
 .authenticate()
 .then(() => {
 console.log('Connection has been established successfully.');
 })
 .catch(err => {
 console.error('Unable to connect to the database:', err);
 })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//tables

db.demon = Demon(sequelize, Sequelize);
db.giant = Giant(sequelize, Sequelize);
db.gods = God(sequelize, Sequelize);
db.monsters = Monster(sequelize, Sequelize);
db.mortals = Mortal(sequelize, Sequelize);
db.primordials = Primordial(sequelize, Sequelize);
db.link = Link(sequelize, Sequelize,db.demon, db.giant, db.gods, db.monsters, db.mortals, db.primordials); //add f keys from table here eg db.link
db.character = Character(sequelize, Sequelize, db.link);

module.exports = db;