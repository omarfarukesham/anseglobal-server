import { Router } from "express";
import { instagramController } from "./instagram.controller";

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
instagramRouter.post("/token", instagramController.createInstagramToken);

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
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Instagram'
 */
instagramRouter.get("/token", instagramController.getInstagramToken);

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
// instagramRouter.get("/:id", instagramController.getInstagramById);

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
instagramRouter.put("/token/:token", instagramController.updateInstagramToken);

/**
 * @swagger
 * /api/instagram/data:
 *   get:
 *     summary: Get Instagram data
 *     tags: [Instagram]
 *     responses:
 *       200:
 *         description: Instagram data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Instagram'
 *       404:
 *         description: Instagram data not found
 */
instagramRouter.get("/data", instagramController.getInstagramData);

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
instagramRouter.delete("/token/:id", instagramController.deleteInstagramToken);

export default instagramRouter;
