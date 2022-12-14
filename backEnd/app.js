const express = require('express');
const logger = require('morgan');
const charactersRouter = require('./routes/characters');
const linksRouter = require('./routes/link');
const demonsRouter = require('./routes/demon')
const giantsRouter = require('./routes/giants')
const godsRouter = require('./routes/gods')
const monstersRouter = require('./routes/monsters')
const mortalsRouter = require('./routes/mortals')
const primordialsRouter = require('./routes/primordials')

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use("/characters", charactersRouter);
app.use("/link",linksRouter);
app.use("/demon",demonsRouter);
app.use("/giant",giantsRouter);
app.use("/gods",godsRouter);
app.use("/monsters",monstersRouter);
app.use("/mortals",mortalsRouter);
app.use("/primordials",primordialsRouter);



app.use((req, res) =>
 res.status(404).send("Sorry page not found!"));

 app.get("/", (req, res) => {
    res.json( "Testing...");
    })
 
module.exports = app;