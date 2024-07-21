"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
const tokenGenerate_1 = require("../utils/tokenGenerate");
const ThrowException_1 = __importDefault(require("../middlewares/exceptions/ThrowException"));
class UserService {
    constructor() {
        this.createNewUser = async (name, email, password) => {
            if (!name || !email || !password) {
                throw new ThrowException_1.default(401, 'Todos os campos devem ser preenchidos');
            }
            const users = await UserModel_1.default.findAll();
            const validate1 = users.some((user) => user.email === email);
            if (validate1) {
                throw new ThrowException_1.default(409, 'Usuário já existe');
            }
            const newUser = await UserModel_1.default.create({
                name,
                email,
                password,
            });
            return newUser;
        };
        this.getLogin = async (email, password) => {
            if (!email || !password)
                throw new ThrowException_1.default(400, 'Todos os campos devem ser preenchidos');
            const user = await UserModel_1.default.findOne({ where: { email } });
            if (!user)
                throw new ThrowException_1.default(401, 'Senha ou email incorretos');
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid)
                throw new ThrowException_1.default(401, 'Senha ou email incorretos');
            const { name, id } = user;
            const token = tokenGenerate_1.tokenGenerate.makeToken(id, name, email);
            return token;
        };
        this.getLoginValidate = async (token) => {
            if (!token)
                throw new ThrowException_1.default(401, 'Token invalid');
            const user = await tokenGenerate_1.tokenGenerate.validateToken(token);
            console.log(user);
            return user;
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map