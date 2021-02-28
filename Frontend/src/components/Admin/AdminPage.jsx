import React, { useEffect } from 'react';
import AdminCard from './AdminCard';
import { useDispatch, useSelector } from 'react-redux';
import { setBookData } from '../../redux/App/actions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function AdminPage() {
	const history = useHistory();
	const bookData = useSelector((state) => state.app.bookData) || [];
	const dispatch = useDispatch();

	useEffect(
		() => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/api/getBooks'
			})
				.then((res) => dispatch(setBookData(res.data)))
				.catch((err) => console.log(err));
		},
		[dispatch]
	);

	const handleClick = (_id) => {
		history.push(`/chapters/${_id}`);
	};
	return (
		<div style = {{display : "flex", flexWrap : "wrap"}}>
			{bookData &&
				bookData.map((item, id) => (
					<div key={id}>
						<AdminCard data={item} handleClick={handleClick} />
					</div>
				))}
		</div>
	);
}
