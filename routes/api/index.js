import { Router } from 'express';
import categoryRoutes from './category-routes.js';
import taskRoutes from './task-routes.js';

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/tasks', taskRoutes);

export default router;