import { Router } from 'express';
import {
  getAllHotels,
  getHotelByName,
  createHotel,
  updateHotel,
  deleteHotel,
} from '../controllers/hotelController';

import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
//Router() provides a way to organize related routes together and apply middleware to them efficiently

//Public route
router.get('/', getAllHotels);
router.get('/:name', getHotelByName);

// Protected routes
router.post('/', authMiddleware, createHotel);

router.put('/:id', authMiddleware, updateHotel);

router.delete('/:id', authMiddleware, deleteHotel);

export default router; //export the group of routes for app.ts to use it

