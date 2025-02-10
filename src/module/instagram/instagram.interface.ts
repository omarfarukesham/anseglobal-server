/**
 * @swagger
 * components:
 *   schemas:
 *     Instagram:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the Instagram record
 *         accessToken:
 *           type: string
 *           description: Instagram access token
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *       required:
 *         - accessToken
 */
export interface IInstagram {
    token: string;
    createdAt: Date;
    updatedAt: Date;
  }
  