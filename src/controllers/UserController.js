import { users } from '../database/users';
import {
  createUserService,
  deleteUserService,
  updateUserService,
  userLoginService,
} from '../services/UserService';

export const getUserController = (req, res) => {
  return res.status(200).json(users);
};

export const createUserController = async (req, res) => {
  const [status, user] = await createUserService(req.body);
  return res.status(status).json(user);
};

export const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const [status, token] = await userLoginService(email, password);
  return res.status(status).json(token);
};

export const deleteUserController = (req, res) => {
  const [status, message] = deleteUserService(req);
  return res.status(status).json(message);
};

export const updateUserController = (req, res) => {
  const [status, user] = updateUserService(req);
  return res.status(status).json(user);
};
