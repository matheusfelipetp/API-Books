import jwt from 'jsonwebtoken';

export const verifyAuthMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return [401, { error: 'Token inválido' }];
  }

  const token = authToken.split(' ')[1];

  jwt.verify(token, 'SECRET_KEY', (error) => {
    if (error) {
      return [401, { error: error.message }];
    }
  });

  return next();
};
