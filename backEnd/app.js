const express = require('express');
const logger = require('morgan');
const toolsRouter = require('./routes/characters');

const app = express();
app.use(express.json());
app.use(logger('dev'));

app.use("/characters", charactersRouter);

app.use((req, res) =>
 res.status(404).send("Sorry page not found!"));

 app.get("/", (req, res) => {
    res.json( "Testing...");
    })
 
module.exports = app;