import type { NextFunction, Request, Response } from 'express';
import { httpStatus, BaseError } from '@/errors';

const healthCheckController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };

    res.send(healthcheck);
  } catch (error) {
    next(new BaseError(
      httpStatus.SERVICE_UNAVAILABLE.name,
      httpStatus.SERVICE_UNAVAILABLE.code,
      true,
      httpStatus.SERVICE_UNAVAILABLE.name
    ))
  }
}
 
export default healthCheckController
