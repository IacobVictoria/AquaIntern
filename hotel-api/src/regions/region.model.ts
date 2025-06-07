// src/regions/region.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Hotel } from '../hotels/hotel.model';

@Table({
  tableName: 'Regions',
  timestamps: true,
})
export class Region extends Model<Region> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  PropertyStateProvinceID: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  PropertyStateProvinceName: string;

  @HasMany(() => Hotel, {
    foreignKey: 'PropertyStateProvinceID',
    as: 'hotels',
  })
  hotels: Hotel[];
}
