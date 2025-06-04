import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Hotel extends Model {
  static associate(models: any) {
    Hotel.belongsTo(models.City, {
      foreignKey: "CityID",
      as: "city",
    });

    Hotel.belongsTo(models.Region, {
      foreignKey: "PropertyStateProvinceID",
      as: "region",
    });
  }
}

Hotel.init(
  {
    GlobalPropertyID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    SourcePropertyID: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    GlobalPropertyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    GlobalChainCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    PropertyAddress1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PropertyAddress2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PrimaryAirportCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Cities",
        key: "CityID",
      },
    },
    PropertyStateProvinceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Regions",
        key: "PropertyStateProvinceID",
      },
    },
    PropertyZipPostal: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PropertyPhoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PropertyFaxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    SabrePropertyRating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
    PropertyLatitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true,
    },
    PropertyLongitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true,
    },
    SourceGroupCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Hotels",
    timestamps: true,
  }
);

export default Hotel;
