const express = require("express");
const mongoose = require("mongoose");
require("./db/connect");
const app = express();

// Set Template Engine
app.set("view engine", "ejs");
const Book = require("./models/bookModels");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

port = 3000;

app.listen(port, () => console.log(`App is listening on port ${port} ...`));

// Get All Books

app.get("/", (req, res) => {
  Book.find({}, (error, list) => {
    res.render("index", {
      booksList: list,
    });
  });
});

// Add New Book
app.post("/", (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Get a Specific Book With It's Id To Update It

app.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Book.findById(id, req.body, (err, doc) => {
    if (err || !doc) {
      console.log(err);
    } else {
      if (doc == null) {
        res.redirect("/");
      } else {
        res.render("edit", {
          doc: doc,
        });
      }
    }
  });
});

// Update That Book

app.post("/edit/:id", (req, res) => {
  Book.findByIdAndUpdate(
    { _id: req.params.id }, req.body, 
    {
      Name: req.body.name,
      Author: req.body.author
    },
    (error, result) => {
      if (error || !result)  {
        console.log(error)
      }
    })
    res.redirect('/');
});
