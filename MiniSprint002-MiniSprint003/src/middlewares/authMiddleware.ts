import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

/**
 * Auth middleware that verifies JWT from the Authorization header.
 * Attaches decoded user to `req.user` or returns 401 if invalid/missing.
 *
 * @param {Request & { user?: any }} req - Incoming request
 * @param {Response} res - HTTP response
 * @param {NextFunction} next - Next middleware function
 *
 * @returns {void} Either passes control to next middleware or sends a 401 (unauthorized status) response
 */
export const authMiddleware = (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ message: "Missing token." });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
    return;
  }
};
