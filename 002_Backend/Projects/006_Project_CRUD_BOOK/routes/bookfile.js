import express from 'express';
import Book from '../models/book.js';

const router = express.Router();

// GET route to fetch all books
router.get('/', async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// GET route to fetch book by name
router.get('/:name', async (req, res) => {
  try {
    const name = req.params.name; // Access the name parameter from the request

    // Fetch book by name from the database
    const book = await Book.findOne({ title: name });

    if (!book) {
      return res.status(404).send('Book not found');
    }

    res.send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

export default router;
