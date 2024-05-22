import express from 'express';
import connectDB from './database.js'; // Assuming database connection function is in database.js
import Book from './models/book.js'; // Importing the Book model from the models folder

const app = express();

// Connect to MongoDB
connectDB(); // Assuming connectDB() is a function that establishes MongoDB connection

// Middleware for parsing JSON requests
app.use(express.json());

// Route to handle POST request to add a new book
app.post('/books', async (req, res) => {
 
    const { title, author, genre } = req.body;

    // Creating a new book instance with the provided data
    const newBook = new Book({
      title,
      author,
      genre,
    });
      const savedBook = await newBook.save();

 
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
