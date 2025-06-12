import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * Middleware to process validation errors from `express-validator`.
 *
 * Checks for validation errors attached to the request. If any exist,
 * responds with HTTP 422 Unprocessable Entity and returns the list of errors.
 *
 * Otherwise, passes control to the next middleware/controller.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Function to pass control to the next middleware
 *
 * @returns {void} Responds with 422 on validation failure, or continues chain on success
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
