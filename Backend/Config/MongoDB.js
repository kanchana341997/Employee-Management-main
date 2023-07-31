import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  mongoURI: process.env.MONGO_URI,
//   apiKey: process.env.API_KEY || 'your_api_key',
//   secretKey: process.env.SECRET_KEY || 'your_secret_key',
};

export default config;
