const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bookRoutes = require('./routs/bookRoutes')

// Template Engine
app.set("view engine", "ejs");


port = 3000;
app.listen(port, () => console.log(`App is listening on port ${port} ...`))

     // connecting ot database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true })
   .then(() => console.log("Database connected ..."))
    .catch(err => console.log( err.message ));

// Middleware
app.use(express.urlencoded({ extended: true }))


app.use('/', bookRoutes);

