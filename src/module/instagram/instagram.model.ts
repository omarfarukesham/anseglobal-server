import mongoose, { model, Schema } from "mongoose";

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

const instagramSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Instagram = model("Instagram", instagramSchema);

export default Instagram;
