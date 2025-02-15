import { Router } from "express";
import { seoController } from "./seo.controller";

const seoRouter = Router();

/**
 * @swagger
 * tags:
 *   name: SEO
 *   description: API endpoints for managing SEO data
 */

/**
 * @swagger
 * /api/seo:
 *   post:
 *     summary: Create a new SEO entry
 *     tags: [SEO]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SEO'
 *     responses:
 *       201:
 *         description: SEO entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SEO'
 *       400:
 *         description: Bad request
 */
seoRouter.post("/", seoController.createSEO);

/**
 * @swagger
 * /api/seo/{id}:
 *   get:
 *     summary: Get a single SEO entry by ID
 *     tags: [SEO]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: SEO entry ID
 *     responses:
 *       200:
 *         description: SEO entry retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SEO'
 *       404:
 *         description: SEO entry not found
 */
seoRouter.get("/:slug", seoController.getSingleSEO);

/**
 * @swagger
 * /api/seo/{id}:
 *   patch:
 *     summary: Update an SEO entry by ID
 *     tags: [SEO]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: SEO entry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SEO'
 *     responses:
 *       200:
 *         description: SEO entry updated successfully
 *       404:
 *         description: SEO entry not found
 */
seoRouter.patch("/:id", seoController.updateSEO);

/**
 * @swagger
 * /api/seo/{id}:
 *   delete:
 *     summary: Delete an SEO entry by ID
 *     tags: [SEO]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: SEO entry ID
 *     responses:
 *       200:
 *         description: SEO entry deleted successfully
 *       404:
 *         description: SEO entry not found
 */
seoRouter.delete("/:id", seoController.deleteSEO);

/**
 * @swagger
 * /api/seo:
 *   get:
 *     summary: Get all SEO entries
 *     tags: [SEO]
 *     responses:
 *       200:
 *         description: List of all SEO entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SEO'
 */
seoRouter.get("/", seoController.getAllSEOs);

export default seoRouter;

// import { Router } from 'express';
// import { seoController } from './seo.controller';

// const seoRouter = Router();

// seoRouter.post('/', seoController.createSEO);
// seoRouter.get('/:id', seoController.getSingleSEO);
// seoRouter.patch('/:id', seoController.updateSEO);
// seoRouter.delete('/:id', seoController.deleteSEO);
// seoRouter.get('/', seoController.getAllSEOs);

// export default seoRouter;
