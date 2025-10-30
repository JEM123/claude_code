import { Application } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config } from './index';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OptiFlow Suite API',
      version: '1.0.0',
      description: 'Enterprise Management System - API Documentation',
      contact: {
        name: 'OptiFlow Team',
        email: 'support@optiflow-suite.com',
      },
      license: {
        name: 'Proprietary',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}/api/${config.apiVersion}`,
        description: 'Development server',
      },
      {
        url: `https://api.optiflow-suite.com/api/${config.apiVersion}`,
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string' },
            code: { type: 'string' },
            errors: { type: 'array', items: { type: 'object' } },
          },
        },
        Success: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            data: { type: 'object' },
            message: { type: 'string' },
          },
        },
        Pagination: {
          type: 'object',
          properties: {
            page: { type: 'integer', example: 1 },
            limit: { type: 'integer', example: 20 },
            total: { type: 'integer', example: 100 },
            totalPages: { type: 'integer', example: 5 },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      { name: 'Authentication', description: 'Authentication endpoints' },
      { name: 'Users', description: 'User management' },
      { name: 'Roles', description: 'Role management' },
      { name: 'Entities', description: 'Organization structure' },
      { name: 'Persons', description: 'Person management' },
      { name: 'Positions', description: 'Position management' },
      { name: 'Competencies', description: 'Competency management' },
      { name: 'Documents', description: 'Document management' },
      { name: 'Processes', description: 'Process management' },
      { name: 'Procedures', description: 'Procedure management' },
      { name: 'Tasks', description: 'Task management' },
      { name: 'Risks', description: 'Risk management' },
      { name: 'Controls', description: 'Control management' },
      { name: 'Incidents', description: 'Incident management' },
      { name: 'Improvements', description: 'Improvement management' },
      { name: 'Indicators', description: 'KPI management' },
      { name: 'Missions', description: 'Mission/Project management' },
    ],
  },
  apis: ['./src/presentation/routes/*.ts', './src/presentation/controllers/*.ts'],
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'OptiFlow Suite API Docs',
  }));
};
