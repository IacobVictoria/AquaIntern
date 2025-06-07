import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HotelService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  async findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const hotel = await this.hotelService.findOne(id);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }

  @Post()
  async create(@Body() data: CreateHotelDto) {
    try {
      return await this.hotelService.create(data);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create hotel');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateHotelDto: UpdateHotelDto,
  ) {
    const hotel = await this.hotelService.update(id, updateHotelDto);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const deleted = await this.hotelService.delete(id);
    if (!deleted) {
      throw new NotFoundException('Hotel not found');
    }
    return { message: 'Hotel deleted successfully' };
  }
}
