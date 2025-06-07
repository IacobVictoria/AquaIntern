import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { City } from '../cities/city.model';
import { Region } from '../regions/region.model';
import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

@Table({
  tableName: 'Hotels',
  timestamps: true,
})
export class Hotel extends Model<
  InferAttributes<Hotel>,
  InferCreationAttributes<Hotel>
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  GlobalPropertyID: CreationOptional<number>;

  @Column({ type: DataType.STRING(50), allowNull: true })
  SourcePropertyID?: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  GlobalPropertyName: string;

  @Column({ type: DataType.STRING(10), allowNull: true })
  GlobalChainCode?: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  PropertyAddress1?: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  PropertyAddress2?: string;

  @Column({ type: DataType.STRING(10), allowNull: true })
  PrimaryAirportCode?: string;

  @ForeignKey(() => City)
  @Column({ type: DataType.INTEGER, allowNull: true })
  CityID?: number;

  @BelongsTo(() => City)
  city?: City;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER, allowNull: true })
  PropertyStateProvinceID?: number;

  @BelongsTo(() => Region)
  region?: Region;

  @Column({ type: DataType.STRING(20), allowNull: true })
  PropertyZipPostal?: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  PropertyPhoneNumber?: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  PropertyFaxNumber?: string;

  @Column({ type: DataType.DECIMAL(3, 1), allowNull: true })
  SabrePropertyRating?: number;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: true })
  PropertyLatitude?: number;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: true })
  PropertyLongitude?: number;

  @Column({ type: DataType.STRING(10), allowNull: true })
  SourceGroupCode?: string;
}
