// books.route.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  // Fetch books from the database
  res.status(200).send(true);
});

router.post("/add", (req, res) => {

    console.log(req.body,);
  res.status(201).json({ message: "Book added successfully" });
});

router.delete("/delete/:id/settings/:author", (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: "Book deleted successfully" });
});

export default router;
