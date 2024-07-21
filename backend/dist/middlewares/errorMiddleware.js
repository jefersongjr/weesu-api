"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res, _next) => {
    const { status = 500, message } = error;
    return res.status(status).json({ message });
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map