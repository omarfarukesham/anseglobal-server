"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * @swagger
 * components:
 *   schemas:
 *     Instagram:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: The authentication token for the Instagram account
 *       required:
 *         - token
 */
const instagramSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Instagram = (0, mongoose_1.model)("Instagram", instagramSchema);
exports.default = Instagram;
