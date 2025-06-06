import { body } from "express-validator";
import City from "@models/City";
import Region from "@models/Region";

export const validateUpdateHotel = [
  body("GlobalPropertyName")
    .optional()
    .isString()
    .isLength({ min: 2 })
    .withMessage("Hotel name must be at least 2 characters long"),

  body("SourcePropertyID").optional().isString(),

  body("GlobalChainCode").optional().isString(),

  body("PropertyAddress1").optional().isString(),
  body("PropertyAddress2").optional().isString(),

  body("PrimaryAirportCode").optional().isString(),

  body("CityID")
    .optional()
    .isInt()
    .withMessage("CityID must be an integer")
    .custom(async (value) => {
      const city = await City.findByPk(value);
      if (!city) {
        return Promise.reject(`CityID: ${value} does not exist.`);
      }
    }),
  body("PropertyStateProvinceID")
    .optional()
    .isInt()
    .custom(async (value) => {
      const region = await Region.findByPk(value);
      if (!region) {
        return Promise.reject(
          `PropertyStateProvinceID: ${value} does not exist.`
        );
      }
    }),
    
  body("PropertyZipPostal").optional().isString(),

  body("PropertyPhoneNumber").optional().isString(),
  body("PropertyFaxNumber").optional().isString(),

  body("SabrePropertyRating")
    .optional()
    .isFloat({ min: 0, max: 9.9 })
    .withMessage("Rating must be a decimal number with max one decimal"),

  body("PropertyLatitude")
    .optional()
    .isFloat({ min: -90, max: 90 })
    .withMessage("Latitude must be between -90 and 90"),

  body("PropertyLongitude")
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage("Longitude must be between -180 and 180"),

  body("SourceGroupCode").optional().isString(),
];
