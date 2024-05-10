// controllers/BookController.js

const Book = require('../models/Book');

// Controller function to list all books
exports.listBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error listing books:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to search books by title and author
exports.searchBooks = async (req, res) => {
  try {
    const { title, author } = req.query;
    const query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (author) query.author = { $regex: author, $options: 'i' };
    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    console.error('Error searching books:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const Favorite = require('../models/Favorite');

// Controller function to add a book to favorites
exports.addToFavorites = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const favorite = new Favorite({ userId, bookId });
    await favorite.save();
    res.json({ message: 'Book added to favorites successfully' });
  } catch (error) {
    console.error('Error adding book to favorites:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};