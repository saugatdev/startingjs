import express from "express";
import { json, urlencoded } from "express";
import booksRouter from "./routes/books.route.js";

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/books", booksRouter);

app.listen(8000, () => {
  console.log("Server has started");
});