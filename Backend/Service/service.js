// service.js
import mongoose from 'mongoose';
import config from '../Config/MongoDB.js';

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

export default mongoose.connection;
