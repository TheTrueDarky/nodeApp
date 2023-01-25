const controller = require('../controllers/monsters');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Monsters
 *  description: Monsters management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Monsters:
 *      required:
 *          - name
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          monster_type:
 *              type: string
 *              example: yuki-onna
 *          abilities:
 *              type: string
 *              example: snow
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No monster with an ID of 2 can be found
 */

/**
 * @swagger
 * /monsters/:
 *  get:    
 *      summary: Get all monsters
 *      description: returns all monsters
 *      tags: [Monsters]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all monsters are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Monsters'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */

router.get('/', controller.getAll);

/**
 * @swagger
 * /monsters/{id}:
 *  get:    
 *      summary: Get a monster by ID
 *      description: returns a monster with the specified ID
 *      tags: [Monsters]
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *          200:
 *              description: the monster is returned
 *              schema:
 *                  $ref: '#/definitions/Monsters'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */

router.get('/:id', controller.getById);

router.post('/', controller.create);
router.delete('/',controller.deleting);
router.put('/', controller.update);

module.exports = router;