import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './city.model';

@Module({
  imports: [SequelizeModule.forFeature([City])],
  exports: [SequelizeModule],
  providers: [CitiesService],
  controllers: [CitiesController]
})
export class CitiesModule {}
