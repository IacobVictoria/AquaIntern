import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hotel } from './hotel.model';
import { HotelService } from './hotels.service';
import { HotelController } from './hotels.controller';
import { Region } from 'src/regions/region.model';
import { City } from 'src/cities/city.model';

@Module({
  imports: [SequelizeModule.forFeature([Hotel,City,Region])],
  providers: [HotelService],
  controllers: [HotelController],
   exports: [HotelService],
})
export class HotelsModule {}
