import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * Middleware to handle validation errors from express-validator.
 */
const handleValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  next();
};

export default handleValidation;
