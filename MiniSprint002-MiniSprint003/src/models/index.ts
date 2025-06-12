import sequelize from '../config/database';
import Hotel from './Hotel';
import City from './City';
import Region from './Region';
import HotelReview from './HotelReview';
import User from './User';

const db: any = {
  sequelize,
  Hotel,
  City,
  Region,
  HotelReview,
  User
};

// associate methods for each model
Object.values(db).forEach((model: any) => {
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
});

export default db;
