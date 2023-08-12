"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateController = void 0;
const utils_1 = require("../../utils");
const errors_1 = require("../../errors");
const validateController = (req, res, next) => {
    try {
        let { cardNum } = req.body;
        const isValid = (0, utils_1.isValidCard)(cardNum);
        if (!isValid || !cardNum) {
            next(new errors_1.BaseError(errors_1.httpStatus.INTERNAL_SERVER.name, errors_1.httpStatus.INTERNAL_SERVER.code, false, `Card Number is not valid`));
        }
        else {
            res.status(200).json({
                message: 'Valid Card',
                success: true
            });
        }
    }
    catch (err) {
        next(err);
    }
};
exports.validateController = validateController;
//# sourceMappingURL=index.js.map