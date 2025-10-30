import { Router } from 'express';
import { authRoutes } from './auth.routes';

export const routes = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: API Root
 *     description: Returns API information
 *     responses:
 *       200:
 *         description: API information
 */
routes.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'OptiFlow Suite API',
    version: '1.0.0',
    documentation: '/api-docs',
  });
});

// Authentication routes
routes.use('/auth', authRoutes);

// TODO: Add other module routes here
// routes.use('/entities', entityRoutes);
// routes.use('/persons', personRoutes);
// routes.use('/roles', roleRoutes);
// routes.use('/positions', positionRoutes);
// routes.use('/documents', documentRoutes);
// routes.use('/processes', processRoutes);
// routes.use('/tasks', taskRoutes);
// routes.use('/risks', riskRoutes);
// routes.use('/controls', controlRoutes);
// routes.use('/incidents', incidentRoutes);
// routes.use('/improvements', improvementRoutes);
// routes.use('/indicators', indicatorRoutes);
// routes.use('/missions', missionRoutes);

export default routes;
