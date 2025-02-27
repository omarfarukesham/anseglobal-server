"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Anseglobal API Documentation',
            version: '1.0.0',
            description: 'API documentation for User, Blog, SEO, Admin, and Auth services',
        },
        servers: [
            {
                url: 'https://anseglobal-server.vercel.app',
                // url: 'http://localhost:5000',
                description: 'Production server',
            },
        ],
    },
    apis: ['./src/app.ts', './src/module/**/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerSpec;
