const controller = require('../controllers/primordials');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.delete('/',controller.deleting);
router.put('/', controller.update);

module.exports = router;