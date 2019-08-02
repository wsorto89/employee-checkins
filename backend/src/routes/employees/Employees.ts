import { EmployeeDao } from '@daos';
import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

// Init shared
const router = Router();
const employeeDao = new EmployeeDao();
export const paramMissingError = 'One or more of the required parameters was missing.';

// Init routes
export const getEmployeesPath = '/all';
export const addCheckInPath = '/check-in';
export const getCheckInsPath = '/check-ins';

/******************************************************************************
 *                      Get All Employees - "GET /api/employees/all"
 ******************************************************************************/

router.get(getEmployeesPath, async (_req: Request, res: Response) => {
  try {
    const employees = await employeeDao.getAll();
    return res.status(OK).json({ employees });
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  }
});

/******************************************************************************
 *                       Check In - "POST /api/employees/check-in"
 ******************************************************************************/

router.post(addCheckInPath, async (req: Request, res: Response) => {
  try {
    const { employeeID } = req.body;
    if (!employeeID) {
      return res.status(BAD_REQUEST).json({
        error: paramMissingError,
      });
    }
    await employeeDao.checkIn(employeeID);
    return res.status(CREATED).end();
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  }
});

/******************************************************************************
 *                      Get All Employees - "GET /api/employees/check-ins"
 ******************************************************************************/

router.get(getCheckInsPath, async (_req: Request, res: Response) => {
  try {
    const count = await employeeDao.getCheckIns();
    return res.status(OK).json({ count });
  } catch (err) {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
