"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerate = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
class tokenGenerate {
}
exports.tokenGenerate = tokenGenerate;
_a = tokenGenerate;
tokenGenerate.makeToken = (id, name, email) => {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };
    const token = jwt.sign({ name, email, id }, 'jwt_secret', jwtConfig);
    return token;
};
tokenGenerate.validateToken = async (token) => {
    const jwtConfig = {
        complete: true,
    };
    if (!token)
        throw new ThrowException_1.default(401, 'Você deve ter um toke válido');
    try {
        const introspection = jwt.verify(token, 'jwt_secret', jwtConfig);
        console.log(introspection);
        return introspection;
    }
    catch (error) {
        throw new ThrowException_1.default(401, 'Você deve ter um toke válido');
    }
};
//# sourceMappingURL=tokenGenerate.js.map