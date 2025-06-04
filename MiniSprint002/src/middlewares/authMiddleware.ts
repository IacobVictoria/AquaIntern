import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
): void => {  
  const authHeader = req.header('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Missing token.' });
    return;  //401- status unauthorized
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    console.log(req.user) // user data encoded in the JWT token
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
    return; 
  }
};
