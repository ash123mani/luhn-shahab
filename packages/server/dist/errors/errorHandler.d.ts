import type { NextFunction, Request, Response } from 'express';
export declare function logError(err: Error): void;
export declare function logErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void;
export declare function returnError(err: Error, req: Request, res: Response, next: NextFunction): void;
export declare function isOperationalError(error: Error): boolean | undefined;
//# sourceMappingURL=errorHandler.d.ts.map