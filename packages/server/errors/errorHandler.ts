import type { NextFunction, Request, Response } from 'express';
import { BaseError } from './baseError'

export function logError(err: Error) {
  console.error(err)
}

export function logErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  logError(err)
  next(err)
}

export function returnError(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(err.statusCode || 500).send({
    success: false,
    message: err.message,
    description: err.description
  })
}

export function isOperationalError(error: Error) {
  if (error instanceof BaseError) {
    return error.isOperational
  }
  return false
}

