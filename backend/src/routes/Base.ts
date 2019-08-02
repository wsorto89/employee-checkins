import { Router } from 'express';
import EmployeeRouter from './employees/Employees';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/employees', EmployeeRouter);

// Export the base-router
export default router;
