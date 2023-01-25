const controller = require('../controllers/gods');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Gods
 *  description: Gods management and administration.
*/

/**
 * @swagger
 * definitions:
 *  Gods:
 *      required:
 *          - name
 *      properties:
 *          id:
 *              type: integer
 *              example: 3
 *          responsibility:
 *              type: string
 *              example: Darkness
 *  Error:
 *      properties:
 *          status:
 *              type: integer
 *              example: 404
 *          message:
 *              type: string
 *              example: No God with an ID of 2 can be found
 */

/**
 * @swagger
 * /gods/:
 *  get:    
 *      summary: Get all gods
 *      description: returns all gods
 *      tags: [Gods]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all gods are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Gods'
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
 * /gods/{id}:
 *  get:    
 *      summary: Get a god by ID
 *      description: returns a god with the specified ID
 *      tags: [Gods]
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
 *              description: the god is returned
 *              schema:
 *                  $ref: '#/definitions/Gods'
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