const Book = require("../models/bookModels");

// Get All Books
const getAll = (req, res) => {
  Book.find({}, (error, list) => {
    res.render("index", {
      booksList: list,
    });
  });
};

// Add A New Book
const addOne = (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get A Specific Book To Update It
const getOneToUpdate = (req, res) => {
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
};

// Update The Specified Book
const updateOne = (req, res) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(
    id,
    req.body,
    {
      Name: req.body.name,
      Author: req.body.author,
    },
    (error, result) => {
      if (error || !result) {
        console.log(error);
      }
    }
  );
  res.redirect("/");
};

// Delete A Specific Book
const deleteOne = (req, res) => {
  let id = req.params.id;
  Book.findByIdAndRemove(id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
};

module.exports = {
  getAll,
  addOne,
  getOneToUpdate,
  updateOne,
  deleteOne,
};
