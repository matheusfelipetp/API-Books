import { users } from '../database/users';
import { books } from '../database/books';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export const getBooksService = (req) => {
  return [200, books];
};

export const createBookService = (req) => {
  const userId = req.params.userId;
  const foundUser = users.find((elem) => elem.id === userId);

  if (!foundUser) {
    return [404, { error: 'Usuário não encontrado!' }];
  }

  const newBook = {
    ...req.body,
    userId: userId,
    id: uuidv4(),
  };

  foundUser.books.push(newBook);
  books.push(newBook);

  return [201, newBook];
};

export const deleteBookService = (req) => {
  const bookId = req.params.id;
  const foundBook = books.find((elem) => elem.id === bookId);

  if (!foundBook) {
    return [404, { error: 'Livro não encontrado!' }];
  }

  const foundUser = users.find((elem) => elem.id === foundBook.userId);
  foundUser.books = foundUser.books.filter((elem) => elem.id !== bookId);

  books = books.filter((elem) => elem.id !== bookId);

  return [200, { message: 'Livro deletado com sucesso!' }];
};

export const updateBookService = (req) => {
  const bookId = req.params.id;
  const foundBook = books.find((elem) => elem.id === bookId);

  if (!foundBook) {
    return [404, { error: 'Livro não encontrado!' }];
  }

  const bookUpdate = {
    ...foundBook,
    ...req.body,
  };

  const foundUser = users.find((elem) => elem.id === foundBook.userId);
  foundUser.books = foundUser.books.filter((elem) => elem.id !== bookId);
  books = books.filter((elem) => elem.id !== bookId);

  foundUser.books.push(bookUpdate);
  books.push(bookUpdate);

  return [201, bookUpdate];
};
