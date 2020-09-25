//Const mongoose = require 'mongoose';
//npm install mongoose, setup schema, format database, name, type, weight, set, reps duration.
// at bottom of schema, export the schema to api-route files
//get the sum of duration of all exercises, look into the javascript reduce method (slack)

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
  {
    typeofE: String,
    name: String,
    duration: Number,
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
  
    }
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
