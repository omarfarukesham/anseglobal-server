import { Router } from 'express';
import { instagramController } from './instagram.controller';

const instagramRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Instagram
 *   description: API endpoints for managing Instagram access tokens
 */

/**
 * @swagger
 * /api/instagram:
 *   post:
 *     summary: Create a new Instagram record
 *     tags: [Instagram]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Instagram'
 *     responses:
 *       201:
 *         description: Instagram record created successfully
 */
instagramRouter.post('/', instagramController.createInstagram);

/**
 * @swagger
 * /api/instagram:
 *   get:
 *     summary: Get all Instagram records
 *     tags: [Instagram]
 *     responses:
 *       200:
 *         description: List of all Instagram records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Instagram'
 */
instagramRouter.get('/', instagramController.getAllInstagrams);

/**
 * @swagger
 * /api/instagram/{id}:
 *   get:
 *     summary: Get a single Instagram record by ID
 *     tags: [Instagram]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instagram record ID
 *     responses:
 *       200:
 *         description: Instagram record retrieved successfully
 *       404:
 *         description: Instagram record not found
 */
instagramRouter.get('/:id', instagramController.getInstagramById);


/**
 * @swagger
 * /api/instagram/{id}:
 *   delete:
 *     summary: Delete an Instagram record by ID
 *     tags: [Instagram]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instagram record ID
 *     responses:
 *       200:
 *         description: Instagram record deleted successfully
 *       404:
 *         description: Instagram record not found
 */
instagramRouter.delete('/:id', instagramController.deleteInstagram);

export default instagramRouter;
