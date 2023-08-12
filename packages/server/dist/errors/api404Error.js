"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api404Error = void 0;
const httpStatus_1 = require("./httpStatus");
const baseError_1 = require("./baseError");
class Api404Error extends baseError_1.BaseError {
    constructor(name = httpStatus_1.httpStatus.NOT_FOUND.name, statusCode = httpStatus_1.httpStatus.NOT_FOUND.code, description = 'Not found.', isOperational = true) {
        super(name, statusCode, isOperational, description);
    }
}
exports.Api404Error = Api404Error;
//# sourceMappingURL=api404Error.js.map