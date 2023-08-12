import { httpStatus } from './httpStatus';
import { BaseError } from './baseError';

export class Api404Error extends BaseError {
  constructor(
    name: string = httpStatus.NOT_FOUND.name,
    statusCode: number = httpStatus.NOT_FOUND.code,
    description: string = 'Not found.',
    isOperational: boolean = true
  ) {
    super(name, statusCode, isOperational, description)
  }
}