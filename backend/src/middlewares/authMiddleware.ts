import { Request, Response, NextFunction } from 'express';
import { tokenGenerate } from '../utils/tokenGenerate';
import ThrowException from '../middlewares/exceptions/ThrowException';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  try {
    const user = await tokenGenerate.validateToken(token);
    if (!user) throw new ThrowException(401, 'Você precisa de um Token válido');
  } catch (error) {
    next(error);
  }
  next();
};
