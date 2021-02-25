const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const logger = require('./config/logger')
 
require("dotenv").config();


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


//DB
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  logger.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});





//Router

const dossierRouter = require("./routes/dossier");
app.use("/dossier", dossierRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})