import { Request, Response } from "express";
import db from "../models/index";
const { Hotel, City, Region } = db;
//'db' object for all Sequelize models and the database connection
//these models here includes their relations automatically


//GET method for all hotels including their associated city and region data
// '/hotels'
export const getAllHotels = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
    const hotels = await Hotel.findAll({
      limit: 10, // because the postman could not handle the nr of rows
        include: [
        { model: City, as: "city" },
        { model: Region, as: "region" },
      ],
    });

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve hotels." }); //internal error status
  }
};

// GET method to retrieve a single hotel based on property GlobalPropertyName
//  '/hotels/:name'
export const getHotelByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name } = req.params;
  try {
    const hotel = await Hotel.findOne({
      where: { GlobalPropertyName: name },
      include: [
        { model: City, as: "city" },
        { model: Region, as: "region" },
      ],
    });

    if (!hotel) {
      res.status(404).json({ error: "Hotel not found" });
      return; // not found status
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve hotel." });
  }
};

// POST method to store a new hotel in database
//  '/hotels'
export const createHotel = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);  // 201 status - Created
  } catch (error) {
    res.status(500).json({ error: "Failed to create hotel." });
  }
};

// PUT method to edit an existing hotel by the PK GlobalPropertyID
// '/hotels/:id '
export const updateHotel = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const [updated] = await Hotel.update(req.body, {
      where: { GlobalPropertyID: id },
    });

    if (!updated) {
      res.status(404).json({ error: "Hotel not found" });
      return;
    }

    const updatedHotel = await Hotel.findByPk(id);
    res.status(200).json(updatedHotel);  //200 status -> OK
  } catch (error) {
    res.status(500).json({ error: "Failed to update hotel." });
  }
};

// DELETE method to remove a hotel by the property GlobalPropertyID
// '/hotels/:id'
export const deleteHotel = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const deleted = await Hotel.destroy({
      where: { GlobalPropertyID: id },
    });

    if (!deleted) {
      res.status(404).json({ error: "Hotel not found" });
      return;
    }

    res.status(200).json({ message: "Hotel deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete hotel." });
  }
};
