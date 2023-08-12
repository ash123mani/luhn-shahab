"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperationalError = exports.returnError = exports.logErrorMiddleware = exports.logError = void 0;
const baseError_1 = require("./baseError");
function logError(err) {
    console.error(err);
}
exports.logError = logError;
function logErrorMiddleware(err, req, res, next) {
    logError(err);
    next(err);
}
exports.logErrorMiddleware = logErrorMiddleware;
function returnError(err, req, res, next) {
    res.status(err.statusCode || 500).send({
        success: false,
        message: err.message,
        description: err.description
    });
}
exports.returnError = returnError;
function isOperationalError(error) {
    if (error instanceof baseError_1.BaseError) {
        return error.isOperational;
    }
    return false;
}
exports.isOperationalError = isOperationalError;
//# sourceMappingURL=errorHandler.js.map