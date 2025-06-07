// src/cities/city.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Hotel } from '../hotels/hotel.model';

@Table({
  tableName: 'Cities',
  timestamps: true,
})
export class City extends Model<City> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  CityID: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  CityName: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  Country: string;

  @HasMany(() => Hotel, { foreignKey: 'CityID', as: 'hotels' })
  hotels: Hotel[];
}
