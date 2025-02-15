"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the blog
 *         content:
 *           type: string
 *           description: The content of the blog
 *         author:
 *           type: string
 *           description: The ID of the author
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
 *         - content
 *         - author
 */
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    image: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const Blog = (0, mongoose_1.model)("Blog", blogSchema);
exports.default = Blog;
