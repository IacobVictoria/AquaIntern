import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class City extends Model {
     static associate(models: any) {
    City.hasMany(models.Hotel, { foreignKey: 'CityID', as: 'hotels' });
  }
}

City.init(
  {
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CityName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Cities',
    timestamps: true,
  }
);

export default City;
