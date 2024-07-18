import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.getLogin);

export { userRouter };
