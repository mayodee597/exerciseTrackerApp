//require router on top and workout.js file in schema
//post route goes to /api/workout and reference schema and create a new database and send in json format and handling for .catch
//create a schema and send  it the route to catch error-   post-route
//create a put route updating values... /api/workouts/:id and reference workout schema
//create a get route to get to /api/workouts
//reference the schema name with a .find and proceed with format
//create another get route to the path /api/workout
//create a delete  to path /api/workout
//export the router or object with route in it into server.js


const { mongo } = require("mongoose");
const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            console.log("Found");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        const body = req.body;
        db.Workout.create(body)
        .then(dbWorkout => {
            console.log("Created");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const body = req.body;
        db.Workout.findOneAndUpdate(
            {
                _id: id
            },
            { 
                $push: { exercises: body } 
            },
            { 
                new: true 
            })
        .then(dbWorkout => {
            console.log("Added");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            console.log("Found");
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};