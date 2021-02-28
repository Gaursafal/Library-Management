const express = require('express');
const books = require('./books');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const Book = require('./models/Book');
const bookRoute = require('./routes/Books');
// const authRoute = require('./routes/auth');

mongoose.connect(
	process.env.ATLAS_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	(err) => {
		if (err) {
			console.log('Database Connection Failed!');
		}else{
			console.log("Database Connected");
		}

		if (
			Book.collection.countDocuments((err, count) => {
				if (!err && count === 0) {
					Book.insertMany(books)
						.then(() => {
							console.log('Data inserted!');
						})
						.catch((error) => {
							console.log(error);
						});
				}
			})
		);
	}
);

app.use('/api', bookRoute);
// app.use('/api/admin', authRoute);

app.listen(8000, () => {
	console.log('The server is up and running!');
});
