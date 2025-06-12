import { Router } from "express";
import {
  getAllHotels,
  getHotelByName,
  createHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotelController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { validateCreateHotel } from "../middlewares/hotel/validateCreateHotel";
import handleValidation from "../middlewares/hotel/handleValidation";
import { validateUpdateHotel } from "../middlewares/hotel/validateUpdateHotel";
import { validateDeleteHotel } from "@middlewares/hotel/validateDeleteHotel";

const router = Router();
//Router() provides a way to organize related routes together and apply middleware to them efficiently

//Public route
router.get("/", getAllHotels);
router.get("/:name", getHotelByName);

// Protected routes
router.post(
  "/",
  authMiddleware,
  validateCreateHotel,
  handleValidation,
  createHotel
);

router.put(
  "/:id",
  authMiddleware,
  validateUpdateHotel,
  handleValidation,
  updateHotel
);

router.delete(
  "/:id",
  authMiddleware,
  validateDeleteHotel,
  handleValidation,
  deleteHotel
);

export default router; //export the group of routes for app.ts to use it
