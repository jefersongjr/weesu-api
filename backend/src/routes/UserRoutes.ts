import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.getLogin);
userRouter.get('/login/validate', authMiddleware, userController.validateLogin);

export { userRouter };
