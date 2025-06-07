import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from './hotel.model';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { City } from 'src/cities/city.model';
import { Region } from 'src/regions/region.model';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel)
    private readonly hotelModel: typeof Hotel,

    @InjectModel(City)
    private readonly cityModel: typeof City,

    @InjectModel(Region)
    private readonly regionModel: typeof Region,
  ) {}

  async findAll() {
    return this.hotelModel.findAll({
      include: ['city', 'region'],
      limit:10
    });
  }

  async findOne(id: number) {
    return this.hotelModel.findByPk(id, {
      include: ['city', 'region'],
    });
  }

  async create(data: CreateHotelDto) {
    if (data.CityID) {
      const city = await this.cityModel.findByPk(data.CityID);
      if (!city) {
        throw new NotFoundException(`City with ID ${data.CityID} not found`);
      }
    }

    if (data.PropertyStateProvinceID) {
      const region = await this.regionModel.findByPk(
        data.PropertyStateProvinceID,
      );
      if (!region) {
        throw new NotFoundException(
          `Region with ID ${data.PropertyStateProvinceID} not found`,
        );
      }
    }

    return this.hotelModel.create(data);
  }

  async update(id: number, data: UpdateHotelDto) {
    const existingHotel = await this.hotelModel.findByPk(id);
    if (!existingHotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }

    if (data.CityID) {
      const city = await this.cityModel.findByPk(data.CityID);
      if (!city) {
        throw new NotFoundException(`City with ID ${data.CityID} not found`);
      }
    }

    if (data.PropertyStateProvinceID) {
      const region = await this.regionModel.findByPk(
        data.PropertyStateProvinceID,
      );
      if (!region) {
        throw new NotFoundException(
          `Region with ID ${data.PropertyStateProvinceID} not found`,
        );
      }
    }
    const [updated] = await this.hotelModel.update(data, {
      where: { GlobalPropertyID: id },
    });

    if (updated) {
      return this.findOne(id);
    }

    return null;
  }

  async delete(id: number) {
    const hotel = await this.hotelModel.findByPk(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }
    
    return this.hotelModel.destroy({
      where: { GlobalPropertyID: id },
    });
  }
}
