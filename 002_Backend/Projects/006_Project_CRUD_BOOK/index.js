import express from "express";
const app = express();

import connectDB from "./database/database.js";
import Book from "./models/book.js";
const PORT = 3000;
import booksRouter from "./routes/createbooks.js";
import userRouter from "./routes/bookfile.js";

connectDB(); // Assuming connectDB() is a function that establishes MongoDB connection

app.use(express.json());
app.use("/createbook", booksRouter);
app.use("/bookfile", userRouter);

app.get("/", async (req, res) => {
  res.send("At home");
});

app.listen(PORT, () => console.log(`PORT STARTED AT ${PORT}`));
