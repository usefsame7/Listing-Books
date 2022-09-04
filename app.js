const express = require("express");
const mongoose = require("mongoose");
require("./db/connect");
const app = express();
const bookRoutes = require('./routs/bookRoutes')

// Set Template Engine
app.set("view engine", "ejs");


port = 3000;

app.listen(port, () => console.log(`App is listening on port ${port} ...`));

// Middleware
app.use(express.urlencoded({ extended: true }));






app.use('/', bookRoutes);
