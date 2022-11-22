import { users } from '../database/users';
import { v4 as uuidv4 } from 'uuid';
import * as bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUserService = async ({ email, name, password }) => {
  const foundUser = users.find((elem) => elem.email === email);

  if (foundUser) {
    return [409, { error: 'E-mail já cadastrado' }];
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    email,
    name,
    password: hashedPassword,
    books: [],
  };

  users.push(newUser);
  return [201, newUser];
};

export const userLoginService = async (email, password) => {
  const foundUser = users.find((elem) => elem.email === email);

  if (!foundUser) {
    return [401, { error: 'Email ou senha inválidos!' }];
  }

  const passwordMatch = await bcryptjs.compare(password, foundUser.password);

  if (!passwordMatch) {
    return [401, { error: 'Email ou senha inválidos!' }];
  }

  const token = jwt.sign({ email }, 'SECRET_KEY', {
    expiresIn: '1d',
    subject: foundUser.id,
  });

  return [200, { token }];
};

export const deleteUserService = (req) => {
  const userId = req.params.id;
  const foundUser = users.find((elem) => elem.id === userId);

  if (!foundUser) {
    return [404, { error: 'Usuário não encontrado!' }];
  }

  users = users.filter((elem) => elem.id !== userId);
  return [200, { message: 'Usuário deletado com sucesso!' }];
};

export const updateUserService = (req) => {
  const userId = req.params.id;
  const foundUser = users.find((elem) => elem.id === userId);

  if (!foundUser) {
    return [404, { error: 'Usuário não encontrado!' }];
  }

  const userUpdate = {
    ...foundUser,
    ...req.body,
  };

  users = users.filter((elem) => elem.id !== userId);
  users.push(userUpdate);

  return [200, userUpdate];
};
