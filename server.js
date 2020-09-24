//require express, mongojs and morgan as middleware
//set up port and variable for the application and port
//set up ap.use logger("dev"),  set up   extended true
/*
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 
 */
 // add mongoose.connect to mongodb
 // add routes from other folder and require other api.js and html.js
 //set up listeners and ports for callback function with port number
 //

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
//const routes = require('./routes/api-routes');

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongoose.connect(process.env.MONGODB_URI  ||  "mongodb://localhost/exerciseFitnessdb",  { useNewUrlParser: true  });
mongoose.connect( "mongodb+srv://mayodee597:rT7)tP2&qs@cluster0.kul51.mongodb.net/exerciseFitnessdb?retryWrites=true&w=majority",  { useNewUrlParser: true, useUnifiedTopology: true  });
require("./exerciseTrackerApp/routes/html-routes.js")(app);
require("./exerciseTrackerApp/routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
