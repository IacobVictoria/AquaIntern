import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class HotelReview extends Model {
  static associate(models: any) {
    HotelReview.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    HotelReview.belongsTo(models.Hotel, {
      foreignKey: "hotel_id",
      as: "hotel",
    });
  }
}

HotelReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating_cleanliness: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_location: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_service: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    media_urls: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    travel_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    type_travel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "Id",
      },
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hotels",
        key: "GlobalPropertyID",
      },
    },
  },
  {
    sequelize,
    tableName: "Hotel_Reviews",
    timestamps: true,
  }
);

export default HotelReview;
