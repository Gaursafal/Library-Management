const Book = require('../models/Book');

const getBooks = (req, res) => {
	Book.find()
		.then((books) => {
			res.json(books);
		})
		.catch((err) => res.status(400).json('Error: ' + err));
};

const getBook = (req, res) => {
	Book.findById(req.params.id).then((book) => res.json(book)).catch((err) => res.status(400).json('Error: ' + err));
};

const deleteBook = (req, res) => {
	Book.findByIdAndDelete(req.params.id)
		.then(() => res.json('Book has been Deleted Successfully!'))
		.catch((err) => res.status(400).json('Error: ' + err));
};

const editBook = (req, res) => {
	Book.findById(req.params.id)
		.then((book) => {
			book.name = req.body.name;
			book.author = req.body.author;
			book.category = req.body.category;
			book.year = req.body.year;

			book
				.save()
				.then(() => res.json('Book has been updated Successfully!'))
				.catch((err) => res.status(400).json('Error: ' + err));
		})
		.catch((err) => res.status(400).json('Error: ' + err));
};

module.exports = { getBooks, getBook, deleteBook, editBook };
