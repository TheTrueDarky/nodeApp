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
 *      tags: [Giant]
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
 *      tags: [Giant]
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
 *      tags: [Giant]
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

/**
 * @swagger
 * /giant/:
 *   delete:
 *      summary: Delete a giant
 *      description: deletes a giant by id
 *      tags: [Giant]
 *      parameters:
 *          - in: body
 *            name: id
 *            description: The id of the giant to delete
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 3
 *      responses:
 *          200:
 *              description: giant successfully deleted
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
 * /giant/:
 *  put:
 *      summary: Update a giant
 *      description: Update an existing demon with the provided information
 *      tags: [Giant]
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: giant
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Giant'
 *      responses:
 *          200:
 *              description: The giant is updated successfully
 *              schema:
 *                  $ref: '#/definitions/Giant'
 *          400:
 *              description: error
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: '#/definitions/Error'
 *          404:
 *              description: The giant with the specified id does not exist.
 */

router.put('/', controller.update);

module.exports = router;