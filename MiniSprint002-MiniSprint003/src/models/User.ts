import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
  static associate(models: any) {
    User.hasMany(models.HotelReview, {
      foreignKey: "user_id",
      as: "reviews",
    });
  }
}
User.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    ProfileImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    RememberToken: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Users",
    timestamps: true,
  }
);
export default User;
