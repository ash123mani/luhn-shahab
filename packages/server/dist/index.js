"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tsc_alias_1 = require("tsc-alias");
(0, tsc_alias_1.replaceTscAliasPaths)({
    configFile: './tsconfig.json'
});
const resp_header_1 = __importDefault(require("./middlewares/resp-header"));
const healthcheck_1 = require("./routes/healthcheck");
const validate_1 = require("./routes/validate");
const errors_1 = require("./errors");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(resp_header_1.default);
app.use(express_1.default.json());
app.use('/api/healthcheck', healthcheck_1.healthCheckRouter);
app.use('/api/validate', validate_1.validateRouter);
app.use(errors_1.logError);
app.use(errors_1.returnError);
const server = app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
process.on("unhandledRejection", (err, promise) => {
    server.close(() => (0, errors_1.logError)(err));
    if (!(0, errors_1.isOperationalError)(err)) {
        process.exit(1);
    }
});
//# sourceMappingURL=index.js.map