import * as jwt from 'jsonwebtoken';
import ThrowException from '../middlewares/exceptions/ThrowException';

export class tokenGenerate {
  static makeToken = (id: number, name: string, email: string) => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ name, email, id }, 'jwt_secret', jwtConfig);
    return token;
  };

  static validateToken = async (token: string | undefined) => {
    const jwtConfig: jwt.VerifyOptions = {
      complete: true,
    };
    if (!token) throw new ThrowException(401, 'Você deve ter um token válido');
    try {
      const introspection = jwt.verify(token, 'jwt_secret', jwtConfig);
      return introspection;
    } catch (error) {
      throw new ThrowException(401, 'Você deve ter um token válido');
    }
  };
}
