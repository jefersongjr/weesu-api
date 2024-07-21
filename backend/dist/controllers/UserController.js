"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
class UserController {
    constructor() {
        this.createUser = async (req, res, next) => {
            try {
                const { name, email, password } = req.body;
                if (!name || !email || !password) {
                    throw new ThrowException_1.default(400, 'Todos os campos devem ser preenchidos');
                }
                const user = await this.userService.createNewUser(name, email, password);
                return res.status(201).json(user);
            }
            catch (error) {
                next(error);
            }
        };
        this.getLogin = async (req, res, next) => {
            var _a, _b;
            try {
                if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.email) || !((_b = req.body) === null || _b === void 0 ? void 0 : _b.password)) {
                    throw new ThrowException_1.default(400, 'Todos os campos devem ser preenchidos');
                }
                const { email, password } = req.body;
                console.log('Tentativa de login com email:', email);
                const token = await this.userService.getLogin(email, password);
                return res.status(200).json({ token: token });
            }
            catch (error) {
                console.error('Erro no controlador de login:', error);
                next(error);
            }
        };
        this.validateLogin = async (req, res, next) => {
            try {
                const token = req.headers.authorization;
                const validateToken = await this.userService.getLoginValidate(token);
                // const { email } = validateToken as JwtPayload;
                const { id } = validateToken.payload;
                return res.status(200).json({ id: id });
            }
            catch (error) {
                next(error);
            }
        };
        this.userService = new UserService_1.UserService();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map