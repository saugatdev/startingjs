// books.route.js
import express from "express";
import validateToken from "../middlewares/validateToken.js";
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.headers);
  console.log("books routess");
  validateToken(req,res,next);
});

router.get("/", (req, res) => {
  // Fetch books from the database
  res.status(200).send(true);
});

router.post("/add", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "Book added successfully" });
});

router.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: "Book deleted successfully" });
});

export default router;
