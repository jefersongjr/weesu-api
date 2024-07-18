import User from '../database/models/UserModel';
import { tokenGenerate } from '../utils/tokenGenerate';
import ThrowException from '../middlewares/exceptions/ThrowException';
import { Jwt } from 'jsonwebtoken';
// import * as bcrypt from 'bcrypt';

export class UserService {
  public getLogin = async (email: string, password: string) => {
    if (!email || !password)
      throw new ThrowException(400, 'Todos os campos devem ser preenchidos');

    const user = await User.findOne({ where: { email } });

    if (!user) throw new ThrowException(401, 'Senha ou email incorretos');

    // const validatePass = bcrypt.compareSync(password, user?.password);
    // console.log(validatePass);

    if (password !== user.password)
      throw new ThrowException(401, 'Senha ou email incorretos');

    const { name } = user;
    const token = tokenGenerate.makeToken(name, email);
    return token;
  };

  public getLoginValidate = async (token: string | undefined) => {
    if (!token) throw new ThrowException(401, 'Token invalid');
    const user = await tokenGenerate.validateToken(token);
    console.log(user);
    return user as Jwt;
  };
}
