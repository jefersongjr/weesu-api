"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
const userController = new UserController_1.UserController();
userRouter.post('/login', userController.getLogin);
userRouter.get('/login/validate', authMiddleware_1.authMiddleware, userController.validateLogin);
userRouter.post('/sign-up', userController.createUser);
//# sourceMappingURL=UserRoutes.js.map