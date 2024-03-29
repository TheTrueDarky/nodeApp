const controller = require('../controllers/characters');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Characters
 *  description: Characters management and administration.
 * */

/**
* @swagger
* definitions:
*  Character:
*      required:
*          - first_name
*      properties:
*          first_name:
*              type: string
*              example: Adreanna
*          surname:
*              type: string
*              example: Kuro
*          gender:
*              type: string
*              example: Female
*          age:
*              type: integer
*              example: 1000
*          deaths:
*              type: integer
*              example: 0
*          character_type:
*              type: string
*              example: Goddess
*          link_id:
*              type: integer
*              example: 500
*          auth_notes:
*              type: string
*              example: Test
*          comments:
*              type: string
*              example: Testing
*          id:
*              type: integer
*              example: 500
*  Error:
*      properties:
*          status:
*              type: integer
*              example: 404
*          message:
*              type: string
*              example: No character with an ID of 2 can be found
 */

/**
 * @swagger
 * /characters/:
 *  get:    
 *      summary: Get all characters
 *      description: returns all characters
 *      tags: [Characters]
 *      produces:
 *        - application/json
 *      responses:
 *          200:
 *              description: all characters are returned
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Character'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */


router.get('/', controller.getAll);



router.get('/desc/:value', controller.getByDesc);

/**
 * @swagger
 * /characters/{id}:
 *  get:    
 *      summary: Get a character by ID
 *      description: returns a character with the specified ID
 *      tags: [Characters]
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
 *              description: the character is returned
 *              schema:
 *                  $ref: '#/definitions/Character'
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
 * /characters/:
 *  post:
 *      summary: Create a new character
 *      description: Creates a new character with the provided information
 *      tags: [Characters]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: character
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Character'
 *      responses:
 *          201:
 *              description: The character is created successfully
 *              schema:
 *                  $ref: '#/definitions/Character'
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
 * /characters/{id}:
 *   put:
 *     summary: Update a character
 *     description: Update an existing character with the provided information
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the character to update
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *       - in: body
 *         name: character
 *         description: The information to update the character with
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Character'
 *     responses:
 *       200:
 *         description: The character is updated successfully
 *         schema:
 *           $ref: '#/definitions/Character'
 *       400:
 *         description: error
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Error'
 *       404:
 *         description: The character with the specified id does not exist.
 */

router.put('/:id', controller.update);

/**
 * @swagger
 * /characters/{id}:
 *   delete:
 *      summary: Delete a character
 *      description: deletes a character by id
 *      tags: [Characters]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: The id of the character to delete
 *            required: true
 *            schema:
 *              type: integer
 *              example: 3
 *      responses:
 *          200:
 *              description: Character successfully deleted
 *          400:
 *              description: Error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 */

router.delete('/:id',controller.deleting);

module.exports = router;