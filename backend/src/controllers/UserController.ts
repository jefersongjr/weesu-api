import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import ThrowException from '../middlewares/exceptions/ThrowException';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

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
  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const users = await this.userService.getAllUsers(); // Método a ser implementado no UserService
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };
}
