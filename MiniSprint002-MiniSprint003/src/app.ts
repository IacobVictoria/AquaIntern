import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database'; 
import hotelRoutes from './routes/hotelRoutes';

dotenv.config();
//'app'= Express application instance to handle incoming HTTP requests
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API is running');
});

app.use('/hotels', hotelRoutes);  // active routes with prefix 'hotels'

const PORT = process.env.PORT || 3000;

//connect with db using sequelize
sequelize.authenticate()
  .then(() => {
    console.log('Connected to database');

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

export default app;
