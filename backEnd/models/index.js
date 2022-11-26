const config = require("../config/config");
const Character = require("././characters");
const Link = require("./link");

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

db.link = Link(sequelize, Sequelize);
db.character = Character(sequelize, Sequelize, db.Link);

module.exports = db;