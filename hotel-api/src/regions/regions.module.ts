import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './region.model';

@Module({
  imports: [SequelizeModule.forFeature([Region])],
  exports: [SequelizeModule],
  controllers: [RegionsController],
  providers: [RegionsService]
})
export class RegionsModule {}
