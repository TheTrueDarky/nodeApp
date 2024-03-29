const controller = require('../controllers/mortals');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Mortals
 *  description: Mortals management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Mortals:
 *      required:
 *          - job
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          job:
 *              type: string
 *              example: fireman
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No mortal with an ID of 2 can be found
 */

/**
 * @swagger
 * /mortals/:
 *  get:    
 *      summary: Get all mortals
 *      description: returns all mortals
 *      tags: [Mortals]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all mortals are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Mortals'
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
 * /mortals/{id}:
 *  get:    
 *      summary: Get a mortal by ID
 *      description: returns a mortal with the specified ID
 *      tags: [Mortals]
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
 *              description: the mortal is returned
 *              schema:
 *                  $ref: '#/definitions/Mortals'
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
 * /mortals/:
 *  post:
 *      summary: Create a new mortal
 *      description: Creates a new mortal with the provided information
 *      tags: [Mortals]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: demon
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Mortals'
 *      responses:
 *          201:
 *              description: The mortal is created successfully
 *              schema:
 *                  $ref: '#/definitions/Mortals'
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
 * /mortals/:
 *   delete:
 *      summary: Delete a mortal
 *      description: deletes a mortal by id
 *      tags: [Mortals]
 *      parameters:
 *          - in: body
 *            name: id
 *            description: The id of the mortal to delete
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 3
 *      responses:
 *          200:
 *              description: mortal successfully deleted
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
 * /mortals/:
 *  put:
 *      summary: Update a mortal
 *      description: Update an existing mortal with the provided information
 *      tags: [Mortals]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: mortals
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Mortals'
 *      responses:
 *          200:
 *              description: The mortal is updated successfully
 *              schema:
 *                  $ref: '#/definitions/Mortals'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 *          404:
 *              description: The mortal with the specified id does not exist.
 */

router.put('/', controller.update);

module.exports = router;