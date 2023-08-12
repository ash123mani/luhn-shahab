"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_1 = require("../controllers/validate");
exports.validateRouter = express_1.default.Router();
exports.validateRouter.post("/", validate_1.validateController);
//# sourceMappingURL=validate.js.map