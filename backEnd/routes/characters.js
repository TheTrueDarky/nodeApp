const controller = require('../controllers/characters');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Characters
 *  description: Characters management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Character:
 *      required:
 *          - description
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          description:
 *              type: string
 *              example: Cooling
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No tool with an ID of 2 can be found
 */

/**
 * @swagger
 * /characters/:
 *  get:    
 *      summary: Get all characters
 *      description: returns all characters
 *      tags: [Characters]
 *      produces:
 *          - application/json
 *      response:
 *          200:
 *              description: all characters are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          $ref: '#/definitions/Character'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  properties:
 *                      $ref: '#/definitions/Error'
 */

router.get('/', controller.getAll);



router.get('/desc/:value', controller.getByDesc);

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *      summary: Get a character by its ID
 *      description: return a character with a provided ID
 *      tags: [Characters]
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id of chosen character
 *          example: 3
 *     response:
 *          200:
 *              description: returns the specified character
 *              schema:
 *                  type: object
 *                  items:
 *                      type: object
 *                      properties:
 *                      $ref: '#/definitions/Character'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  properties:
 *                      $ref: '#/definitions/Error'
 */


router.get('/:id', controller.getById);

router.post('/', controller.create);
router.delete('/:id',controller.deleting);
router.put('/:id', controller.update);

module.exports = router;