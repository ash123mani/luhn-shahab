"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseHeaders = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization");
    next();
};
exports.default = responseHeaders;
//# sourceMappingURL=resp-header.js.map