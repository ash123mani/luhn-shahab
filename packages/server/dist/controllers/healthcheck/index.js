"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const healthCheckController = (req, res, next) => {
    try {
        const healthcheck = {
            uptime: process.uptime(),
            message: "OK",
            timestamp: Date.now(),
        };
        res.send(healthcheck);
    }
    catch (error) {
        next(new errors_1.BaseError(errors_1.httpStatus.SERVICE_UNAVAILABLE.name, errors_1.httpStatus.SERVICE_UNAVAILABLE.code, true, errors_1.httpStatus.SERVICE_UNAVAILABLE.name));
    }
};
exports.default = healthCheckController;
//# sourceMappingURL=index.js.map