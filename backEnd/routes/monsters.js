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

/**
 * @swagger
 * /monsters/:
 *  post:
 *      summary: Create a new monster
 *      description: Creates a new monster with the provided information
 *      tags: [Monsters]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: demon
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Monsters'
 *      responses:
 *          201:
 *              description: The monster is created successfully
 *              schema:
 *                  $ref: '#/definitions/monsters'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */

router.post('/', controller.create);

/**
 * @swagger
 * /monsters/:
 *   delete:
 *      summary: Delete a monster
 *      description: deletes a monster by id
 *      tags: [Monsters]
 *      parameters:
 *          - in: body
 *            name: id
 *            description: The id of the monster to delete
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 3
 *      responses:
 *          200:
 *              description: Monster successfully deleted
 *          400:
 *              description: Error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */


router.delete('/',controller.deleting);

/**
 * @swagger
 * /monsters/:
 *  put:
 *      summary: Update a monster
 *      description: Update an existing demon with the provided information
 *      tags: [Monsters]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: monster
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Monsters'
 *      responses:
 *          200:
 *              description: The monster is updated successfully
 *              schema:
 *                  $ref: '#/definitions/Monsters'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 *          404:
 *              description: The monster with the specified id does not exist.
 */

router.put('/', controller.update);

module.exports = router;