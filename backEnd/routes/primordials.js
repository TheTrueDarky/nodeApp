const controller = require('../controllers/primordials');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Primordials
 *  description: Primordials management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Primordials:
 *      required:
 *          - name
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          department:
 *              type: string
 *              example: Void
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No primordial with an ID of 2 can be found
 */

/**
 * @swagger
 * /primordials/:
 *  get:    
 *      summary: Get all primordials
 *      description: returns all demons
 *      tags: [Primordials]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all primordials are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Primordials'
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
 * /primordials/{id}:
 *  get:    
 *      summary: Get a primordial by ID
 *      description: returns a primordial with the specified ID
 *      tags: [Primordials]
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
 *              description: the primordial is returned
 *              schema:
 *                  $ref: '#/definitions/Primordials'
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
 * /primordials/:
 *  post:
 *      summary: Create a new primordial
 *      description: Creates a new primordial with the provided information
 *      tags: [Primordials]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: primordial
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Primordials'
 *      responses:
 *          201:
 *              description: The primordial is created successfully
 *              schema:
 *                  $ref: '#/definitions/Primordials'
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
 * /primordials/:
 *   delete:
 *      summary: Delete a primordial
 *      description: deletes a primordial by id
 *      tags: [Primordials]
 *      parameters:
 *          - in: body
 *            name: id
 *            description: The id of the primordial to delete
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 3
 *      responses:
 *          200:
 *              description: primordial successfully deleted
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
 * /primordials/:
 *  put:
 *      summary: Update a primordial
 *      description: Update an existing primordials with the provided information
 *      tags: [Primordials]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: primordials
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Primordials'
 *      responses:
 *          200:
 *              description: The primordials is updated successfully
 *              schema:
 *                  $ref: '#/definitions/Primordials'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 *          404:
 *              description: The primordial with the specified id does not exist.
 */

router.put('/', controller.update);

module.exports = router;