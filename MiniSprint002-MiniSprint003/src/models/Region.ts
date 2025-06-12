import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Region extends Model {
  static associate(models: any) {
    Region.hasMany(models.Hotel, { foreignKey: 'PropertyStateProvinceID', as: 'hotels' });
  }
}

Region.init(
  {
    PropertyStateProvinceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PropertyStateProvinceName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Regions',
    timestamps: true,
  }
);


export default Region;
