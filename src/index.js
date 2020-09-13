const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const webconfig = require('../webconfig.json')
const routes = require("./routes")

const app = express();

mongoose.Promise = global.Promise
mongoose.connect(webconfig.dbconnection, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('Database connected!'))
    .catch(error => console.log(`Could not connect to the database. Error ${error}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "files", "uploads"))
);

app.use('/api', routes);

app.listen(3000);

module.exports = app