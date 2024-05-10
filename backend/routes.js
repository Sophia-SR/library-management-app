const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Route to list all books
router.get('/api/books', BookController.listBooks);

// Route to search books by title and author
router.get('/api/books/search', BookController.searchBooks);

// Route to reserve a book
router.post('/api/books/reserve', BookController.reserveBook);

const FavoriteController = require('../controllers/FavoriteController');

// Route to add a book to favorites
router.post('/api/favorites', FavoriteController.addToFavorites);


module.exports = router;


