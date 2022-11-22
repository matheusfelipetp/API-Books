import express from 'express';
import {
  createBookController,
  deleteBookController,
  getBooksController,
  updateBookController,
} from './controllers/BookControler';
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
  userLoginController,
} from './controllers/UserController';
import { verifyAuthMiddleware } from './middlewares/AuthMiddleware';

const app = express();
app.use(express.json());

app.get('/users', getUserController);
app.post('/users', createUserController);
app.delete('/users/:id', verifyAuthMiddleware, deleteUserController);
app.patch('/users/:id', verifyAuthMiddleware, updateUserController);

app.post('/login', userLoginController);

app.get('/books', verifyAuthMiddleware, getBooksController);
app.post('/books/:userId', verifyAuthMiddleware, createBookController);
app.delete('/books/:id', verifyAuthMiddleware, deleteBookController);
app.patch('/books/:id', verifyAuthMiddleware, updateBookController);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
