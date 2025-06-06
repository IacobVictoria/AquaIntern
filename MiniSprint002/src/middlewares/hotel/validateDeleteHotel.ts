import { param } from "express-validator";
import Hotel from "@models/Hotel"; // folosește alias dacă ai setat baseUrl/paths în tsconfig
import { Request, Response, NextFunction } from "express";

/**
 * Middleware to check if hotel exists before deleting
 */
export const validateDeleteHotel = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("Hotel ID must be a positive integer")
    .custom(async (value) => {
      const hotel = await Hotel.findByPk(value);
      if (!hotel) {
        return Promise.reject("Hotel with given ID does not exist.");
      }
    }),
];
