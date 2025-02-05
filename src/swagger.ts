import swaggerJsDoc from 'swagger-jsdoc';

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
        description: 'Production server',
      },
    ],
  },
  apis: ['./src/app.ts', './src/module/**/*.ts'],  
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
