import {
  createBookService,
  deleteBookService,
  getBooksService,
  updateBookService,
} from '../services/bookService';

export const getBooksController = (req, res) => {
  const [status, books] = getBooksService();
  return res.status(status).json(books);
};

export const createBookController = (req, res) => {
  const [status, book] = createBookService(req);
  return res.status(status).json(book);
};

export const deleteBookController = (req, res) => {
  const [status, message] = deleteBookService(req);
  return res.status(status).json(message);
};

export const updateBookController = (req, res) => {
  const [status, book] = updateBookService(req);
  return res.status(status).json(book);
};
