const config = require("../config/config");
const Character = require("././characters");
const Link = require("./link");
const Demon = require("./demon");
const Giant = require("./giants"); // There be Giants!!!
const God = require("./gods"); 

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
db.link = Link(sequelize, Sequelize,db.demon, db.giant, db.gods); //add f keys from table here eg db.link
db.character = Character(sequelize, Sequelize, db.link);

module.exports = db;