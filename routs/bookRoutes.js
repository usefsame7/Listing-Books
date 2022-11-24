const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");


router.get("/", bookController.getAll);
router.post("/", bookController.addOne);
router.get("/edit/:id", bookController.getOneToUpdate);
router.post("/edit/:id", bookController.updateOne);
router.get("/delete/:id", bookController.deleteOne);


module.exports = router;
