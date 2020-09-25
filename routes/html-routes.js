//require router an npm package  or use api.get
//set up backend route to  /exercise as one route and server responds with filepath of exercise.html in public folder
//set up another route to /stats ,server responds with filepath of exercise.html in public folder  
// module.export router and import into server.js file


const path = require("path");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};