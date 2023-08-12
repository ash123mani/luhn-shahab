import type { NextFunction, Request, Response } from 'express';
import { isValidCard } from '@/utils';
import { BaseError, httpStatus } from '@/errors';

export const validateController = (req: Request, res: Response, next: NextFunction) => {
  try {
    let { cardNum } = req.body;
    const isValid = isValidCard(cardNum);

    if (!isValid || !cardNum) {
      next(new BaseError(
        httpStatus.INTERNAL_SERVER.name,
        httpStatus.INTERNAL_SERVER.code,
        false,
        `Card Number is not valid`
      ))
    } else {
      res.status(200).json({
        message: 'Valid Card',
        success: true
      })
    }
  } catch(err) {
    next(err)
  }
}