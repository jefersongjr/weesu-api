import User from '../database/models/UserModel';
import { tokenGenerate } from '../utils/tokenGenerate';
import ThrowException from '../middlewares/exceptions/ThrowException';
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
}
