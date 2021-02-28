import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function EditBook(props) {
	const [ id, setId ] = useState('');
	const [ name, setName ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ year, setYear ] = useState('');

	useEffect(
		() => {
			axios({
				method: 'get',
				url: `http://localhost:8000/api/book/${props.match.params.id}`
			})
				.then((res) => {
					return (
						setId(res.data._id),
						setName(res.data.name),
						setAuthor(res.data.author),
						setCategory(res.data.category),
						setYear(res.data.year)
					);
				})
				.catch((error) => console.log(error));
		},
		[ props.match.params.id ]
	);


const handleUpdate = () => {
		let payload = {
			name: name,
			author: author,
			category: category,
			year: year
		};

		let config = {
			method: 'post',
			url: `http://localhost:8000/api/book/update/${id}`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: payload
		};

		axios(config)
			.then((res) => {
				props.history.push('/admin');
			})
			.catch((error) => alert(error));
	};

	return (
		<div>
			<form>
				<h2>Edit Page</h2>
				<div>
					<TextField
						onChange={(e) => setName(e.target.value)}
						name="name"
						value={name}
						variant="outlined"
					/>
				</div>
				<div>
					<TextField
						onChange={(e) => setAuthor(e.target.value)}
						name="name"
						value={author}
						variant="outlined"
					/>
				</div>
				<div>
					<TextField
						onChange={(e) => setCategory(e.target.value)}
						name="category"
						value={category}
						variant="outlined"
					/>
				</div>
				<div>
					<TextField
						onChange={(e) => setYear(e.target.value)}
						name="year"
						value={year}
						variant="outlined"
					/>
				</div>

				<div>
					<Button onClick={handleUpdate} variant="contained" color="primary">
						UPDATE
					</Button>
				</div>
			</form>
		</div>
	);
}
