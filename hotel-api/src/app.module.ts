import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hotel } from './hotels/hotel.model';
import { HotelsModule } from './hotels/hotels.module';
import { Region } from './regions/region.model';
import { City } from './cities/city.model';
import { HotelController } from './hotels/hotels.controller';
import { RegionsController } from './regions/regions.controller';
import { CitiesController } from './cities/cities.controller';
import { HotelService } from './hotels/hotels.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mini_sprint_2',
      autoLoadModels: true,
      synchronize: true,
      models: [Hotel, Region, City],
    }),
      HotelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
