import express from "express";
import { json, urlencoded } from "express";
import booksRouter from "./routes/books.route.js";
import { rateLimit } from 'express-rate-limit'

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
  console.log("Hello World");
});

app.use("/books", booksRouter);

app.listen(3000, () => {
  console.log("Server has started");
});
