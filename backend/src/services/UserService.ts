import User from '../database/models/UserModel';
import { tokenGenerate } from '../utils/tokenGenerate';
import ThrowException from '../middlewares/exceptions/ThrowException';
import { Jwt } from 'jsonwebtoken';

export class UserService {
  public createNewUser = async (
    name: string,
    email: string,
    password: string,
  ) => {
    if (!name || !email || !password) {
      throw new ThrowException(401, 'Todos os campos devem ser preenchidos');
    }

    const users = await User.findAll();
    const validate1 = users.some((user) => user.email === email);
    if (validate1) {
      throw new ThrowException(409, 'Usuário já existe');
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return newUser;
  };

  public getLogin = async (email: string, password: string) => {
    if (!email || !password)
      throw new ThrowException(400, 'Todos os campos devem ser preenchidos');
    const user = await User.findOne({ where: { email } });

    if (!user) throw new ThrowException(401, 'Senha ou email incorretos');

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid)
      throw new ThrowException(401, 'Senha ou email incorretos');

    const { name, id } = user;
    const token = tokenGenerate.makeToken(id, name, email);
    return token;
  };

  public getLoginValidate = async (token: string | undefined) => {
    if (!token) throw new ThrowException(401, 'Token invalid');
    const user = await tokenGenerate.validateToken(token);
    console.log(user);
    return user as Jwt;
  };
}
