const controller = require('../controllers/characters');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/desc/:value', controller.getByDesc);
router.get('/:id', controller.getById);

module.exports = router;