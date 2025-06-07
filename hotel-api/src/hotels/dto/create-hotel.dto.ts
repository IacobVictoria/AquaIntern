import {
  IsString,
  IsOptional,
  IsNumber,
  IsInt,
  IsDecimal,
  Max,
  Min,
  Length,
} from 'class-validator';

export class CreateHotelDto {
  @IsOptional()
  @IsString()
  SourcePropertyID?: string;

  @IsString()
  GlobalPropertyName: string;

  @IsOptional()
  @IsString()
  GlobalChainCode?: string;

  @IsOptional()
  @IsString()
  PropertyAddress1?: string;

  @IsOptional()
  @IsString()
  PropertyAddress2?: string;

  @IsOptional()
  @IsString()
  PrimaryAirportCode?: string;

  @IsOptional()
  @IsInt()
  CityID?: number;

  @IsOptional()
  @IsInt()
  PropertyStateProvinceID?: number;

  @IsOptional()
  @IsString()
  PropertyZipPostal?: string;

  @IsOptional()
  @IsString()
  PropertyPhoneNumber?: string;

  @IsOptional()
  @IsString()
  PropertyFaxNumber?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0.0)
  @Max(10.0)
  SabrePropertyRating?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 6 })
  PropertyLatitude?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 6 })
  PropertyLongitude?: number;

  @IsOptional()
  @IsString()
  SourceGroupCode?: string;
}
