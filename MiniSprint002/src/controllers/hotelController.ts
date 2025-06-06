import { Request, Response } from "express";
import db from "../models/index";
const { Hotel, City, Region } = db;

/**
 * Retrieves a list of hotels from the database, including related city and region data.
 *
 * Limits the result to 10 entries to avoid overloading the client.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<void>} Responds with JSON data or error message
 */
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

/**
 * Retrieves a hotel by its name, including related city and region data.
 *
 * Returns 404 if the hotel is not found.
 *
 * @param {Request} req - Express request object, with hotel name in req.params.name
 * @param {Response} res - Express response object
 * @returns {Promise<void>} Responds with the hotel object or an error message
 */
export const getHotelByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.params.name;

    if (!name || name.trim() === "") {
      res.status(400).json({ error: "Hotel name is required." });
      return;
    }

    const hotel = await Hotel.findOne({
      where: { GlobalPropertyName: name },
      include: [
        { model: City, as: "city" },
        { model: Region, as: "region" },
      ],
    });

    if (!hotel) {
      res.status(404).json({ error: "Hotel not found." });
      return;
    }

    res.status(200).json(hotel);
  } catch (error) {
    console.error("Error fetching hotel:", error); // log pentru debug
    res.status(500).json({ error: "Failed to retrieve hotel." });
  }
};

/**
 * Creates a new hotel using the data provided in the request body.
 *
 * Returns the created hotel with HTTP 201 status code.
 *
 * @param {Request} req - Express request object containing hotel data in req.body
 * @param {Response} res - Express response object
 * @returns {Promise<void>} Responds with the created hotel or an error message
 */
export const createHotel = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json({
      message: "Hotel created successfully",
      data: newHotel,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create hotel." });
  }
};

/**
 * Updates a hotel by its ID.
 * @param req Express request
 * @param res Express response
 */
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
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ error: "Failed to update hotel." });
  }
};

/**
 * Delete a hotel by ID.
 *
 * @route DELETE /hotels/:id
 * @param req Request object, expects `id` in route params
 * @param res Response object
 * @returns 200 on success, 404 if not found, 500 on error
 */
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
