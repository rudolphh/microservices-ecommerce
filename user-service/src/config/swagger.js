const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'E-Commerce Platform API',
            version: '1.0.0',
            description: 'API documentation for the E-commerce Platform',
        },
        servers: [
            {
                url: process.env.SWAGGER_SERVER_URL || 'http://localhost:3000/api',
                description: process.env.SWAGGER_SERVER_DESCRIPTION || 'Development server',
            },
        ],
    },
    apis: ['../api/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };