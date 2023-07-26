import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/Employee_Management',
//   apiKey: process.env.API_KEY || 'your_api_key',
//   secretKey: process.env.SECRET_KEY || 'your_secret_key',
};

export default config;
