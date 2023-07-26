import express from 'express';
import bodyParser from "body-parser";
import config from "./Config/MongoDB.js";
import service from './Service/service.js';
import routes from "./Routes/routes.js";

const app = express();

// Body-parser middleware to parse JSON data from request body
app.use(bodyParser.json());

app.use(express.json());

app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
