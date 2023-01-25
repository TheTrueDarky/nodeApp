const controller = require('../controllers/giants');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Giant
 *  description: Giant management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Giant:
 *      required:
 *          - name
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          role:
 *              type: string
 *              example: Killing
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No giant with an ID of 2 can be found
 */

/**
 * @swagger
 * /giant/:
 *  get:    
 *      summary: Get all giants
 *      description: returns all giants
 *      tags: [Giants]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all giants are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Giant'
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
 * /giant/{id}:
 *  get:    
 *      summary: Get a giant by ID
 *      description: returns a giant with the specified ID
 *      tags: [Giants]
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
 *                  $ref: '#/definitions/Giant'
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
 * /giant/:
 *  post:
 *      summary: Create a new giant
 *      description: Creates a new giant with the provided information
 *      tags: [Giants]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: giant
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Giant'
 *      responses:
 *          201:
 *              description: The giant is created successfully
 *              schema:
 *                  $ref: '#/definitions/Giant'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */

router.post('/', controller.create);
router.delete('/',controller.deleting);
router.put('/', controller.update);

module.exports = router;