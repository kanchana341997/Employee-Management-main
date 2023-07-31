import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import config from "./Config/MongoDB.js";
import service from './Service/service.js';
import routes from "./Routes/routes.js";

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors());

// Body-parser middleware to parse JSON data from request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(routes);

// Middleware to parse request body as JSON
app.use(express.json());


app.get('/', function(req, res){
  res.json({ message: 'Welcome to Employee Management' });
});


app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
