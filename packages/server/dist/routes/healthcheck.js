"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRouter = void 0;
const express_1 = __importDefault(require("express"));
const healthcheck_1 = __importDefault(require("../controllers/healthcheck"));
exports.healthCheckRouter = express_1.default.Router();
exports.healthCheckRouter.get("/", healthcheck_1.default);
//# sourceMappingURL=healthcheck.js.map