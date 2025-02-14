import { model, Schema } from "mongoose";
import { ISEO } from "./seo.interface";

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

const seoSchema = new Schema<ISEO>(
  {
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
  },
  {
    timestamps: true,
  }
);

const SEO = model<ISEO>("SEO", seoSchema);

export default SEO;
