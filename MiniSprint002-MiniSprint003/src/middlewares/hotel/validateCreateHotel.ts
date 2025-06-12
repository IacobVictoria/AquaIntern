import { body } from "express-validator";
import City from "@models/City";
import Region from "@models/Region";

export const validateCreateHotel = [
  body("GlobalPropertyName")
    .notEmpty()
    .withMessage("GlobalPropertyName is required")
    .isString()
    .withMessage("GlobalPropertyName must be a string"),

  body("SourcePropertyID")
    .isString()
    .withMessage("SourcePropertyID must be a string"),

  body("GlobalChainCode")
    .isString()
    .withMessage("GlobalChainCode must be a string"),

  body("PropertyAddress1")
    .isString()
    .withMessage("PropertyAddress1 must be a string"),

  body("PropertyAddress2")
    .isString()
    .optional()
    .withMessage("PropertyAddress2 must be a string"),

  body("PrimaryAirportCode")
    .isString()
    .withMessage("PrimaryAirportCode must be a string"),

  body("CityID")
    .notEmpty()
    .withMessage("CityID is required")
    .isInt()
    .custom(async (value) => {
      const city = await City.findByPk(value);
      if (!city) {
        return Promise.reject(`CityID: ${value} does not exist.`);
      }
    })
    .withMessage("CityID must be an integer"),

  body("PropertyStateProvinceID")
    .notEmpty()
    .withMessage("PropertyStateProvinceID is required")
    .isInt()
    .custom(async (value) => {
      const region = await Region.findByPk(value);
      if (!region) {
        return Promise.reject(
          `PropertyStateProvinceID: ${value} does not exist.`
        );
      }
    })
    .withMessage("PropertyStateProvinceID must be an integer"),

  body("PropertyZipPostal")
    .isString()
    .withMessage("PropertyZipPostal must be a string"),

  body("PropertyPhoneNumber")
    .isString()
    .withMessage("PropertyPhoneNumber must be a string"),

  body("PropertyFaxNumber")
    .isString()
    .withMessage("PropertyFaxNumber must be a string"),

  body("SabrePropertyRating")
    .isFloat({ min: 0.0, max: 10.0 })
    .withMessage("SabrePropertyRating must be a decimal between 0 and 5"),

  body("PropertyLatitude")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Latitude must be a decimal between -90 and 90"),

  body("PropertyLongitude")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Longitude must be a decimal between -180 and 180"),

  body("SourceGroupCode")
    .isString()
    .withMessage("SourceGroupCode must be a string"),
];
