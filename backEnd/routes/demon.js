const controller = require('../controllers/demon');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Demons
 *  description: Demons management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Demon:
 *      required:
 *          - name
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          demon_type:
 *              type: string
 *              example: Diablo
 *          ability:
 *              type: string
 *              example: death
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No demon with an ID of 2 can be found
 */

/**
 * @swagger
 * /demon/:
 *  get:    
 *      summary: Get all demons
 *      description: returns all demons
 *      tags: [Demons]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all demons are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Demon'
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
 * /demon/{id}:
 *  get:    
 *      summary: Get a demon by ID
 *      description: returns a demon with the specified ID
 *      tags: [Demons]
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
 *              description: the demon is returned
 *              schema:
 *                  $ref: '#/definitions/Demon'
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
 * /demon/:
 *  post:
 *      summary: Create a new demon
 *      description: Creates a new demon with the provided information
 *      tags: [Demons]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: demon
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Demon'
 *      responses:
 *          201:
 *              description: The demon is created successfully
 *              schema:
 *                  $ref: '#/definitions/Demon'
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
 * /demon/:
 *  put:
 *      summary: Update a demon
 *      description: Update an existing demon
 *      tags: [Demons]
 *      produces:
 *          - application/json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Demon'
 *      responses:
 *          200:
 *              description: Demon updated successfully
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */
router.put('/', controller.update);

/**
 * @swagger
 * /demon/:
 *  delete:
 *      summary: Delete a demon
 *      description: Delete an existing demon
 *      tags: [Demons]
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Demon deleted successfully
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */
router.delete('/',controller.deleting);

module.exports = router;