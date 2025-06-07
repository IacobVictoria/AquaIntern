import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';
//no need to repeat, we use all the logic from createDto with all 'optional' fields
export class UpdateHotelDto extends PartialType(CreateHotelDto) {}