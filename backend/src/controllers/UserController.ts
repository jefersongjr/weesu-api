import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import ThrowException from '../middlewares/exceptions/ThrowException';
import { JwtPayload } from 'jsonwebtoken';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new ThrowException(400, 'Todos os campos devem ser preenchidos');
      }

      const user = await this.userService.createNewUser(name, email, password);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  public getLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body?.email || !req.body?.password) {
        throw new ThrowException(400, 'Todos os campos devem ser preenchidos');
      }

      const { email, password } = req.body;

      console.log('Tentativa de login com email:', email);

      const token = await this.userService.getLogin(email, password);
      return res.status(200).json({ token: token });
    } catch (error) {
      console.error('Erro no controlador de login:', error);
      next(error);
    }
  };

  public validateLogin = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers.authorization;
      const validateToken = await this.userService.getLoginValidate(token);
      const { id, name } = validateToken.payload as JwtPayload;
      return res.status(200).json({ id: id, name: name });
    } catch (error) {
      next(error);
    }
  };
}
