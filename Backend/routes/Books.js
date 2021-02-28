const express = require('express');
const router = express.Router();

const { getBooks, getBook, deleteBook, editBook } = require('../controllers/book');

router.get('/getBooks', getBooks);
router.get('/book/:id', getBook);
router.delete('/book/:id', deleteBook);
router.post('/book/update/:id', editBook);

module.exports = router;
