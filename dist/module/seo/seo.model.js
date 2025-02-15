"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *   schemas:
 *     SEO:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the page
 *         description:
 *           type: string
 *           description: The meta description for the page
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *           description: List of relevant keywords
 *         url:
 *           type: string
 *           description: The URL of the page
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *       required:
 *         - title
 *         - description
 *         - url
 */
const seoSchema = new mongoose_1.Schema({
    pageSlug: { type: String, unique: true, required: true },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    keywords: [
        {
            type: String,
        },
    ],
    robotsDirectives: { type: String, default: "index, follow" },
    structuredData: {
        type: String,
    },
    alternateLanguages: {
        type: [String],
    },
    hreflang: {
        type: String,
    },
    lastModified: {
        type: Date,
    },
    canonicalUrl: {
        type: String,
        unique: true,
    },
    createdBy: {
        type: String,
    },
    updatedBy: {
        type: String,
    },
}, {
    timestamps: true,
});
const SEO = (0, mongoose_1.model)("SEO", seoSchema);
exports.default = SEO;
