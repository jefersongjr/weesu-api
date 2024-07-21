"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const tokenGenerate_1 = require("../utils/tokenGenerate");
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const user = await tokenGenerate_1.tokenGenerate.validateToken(token);
        if (!user)
            throw new ThrowException_1.default(401, 'Você precisa de um Token válido');
    }
    catch (error) {
        next(error);
    }
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map