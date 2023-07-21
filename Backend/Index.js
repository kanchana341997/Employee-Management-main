import express from 'express';
import bodyParser from "body-parser";

// import routes
import router from './Routes/routes.js';

const app = express();


// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(router);

// Middleware to parse request body as JSON
app.use(express.json());

app.get('/', function(req, res){
  res.json({ message: 'Welcome to Securra Health' });
});

// Start server
const port = 4000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
