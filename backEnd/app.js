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
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

const swaggerDefinition = {
    info: {
        title: 'Character API',
        version: '1.0.0',
        description: 'A simple API for managing characters'
    },
    host: 'localhost:8900',
    basePath: '/'
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/characters", charactersRouter);
app.use("/link", linksRouter);
app.use("/demon", demonsRouter);
app.use("/giant", giantsRouter);
app.use("/gods", godsRouter);
app.use("/monsters", monstersRouter);
app.use("/mortals", mortalsRouter);
app.use("/primordials", primordialsRouter);



app.use((req, res) =>
    res.status(404).send("Sorry page not found!"));

app.get("/", (req, res) => {
    res.json("Testing...");
})



module.exports = app;