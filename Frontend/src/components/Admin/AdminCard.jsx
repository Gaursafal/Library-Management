import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	card: {
		padding: theme.spacing(2),
		width: 470,
		cursor: "pointer",
		boxShadow: "0 10px 6px -6px #777",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white"
	},
	img: {
		marginRight: "15px",
		width: "200px",
		height: "200px"
	}
}));

export default function AdminCard({ data, handleClick }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { signInUserSuccess } = useSelector((state) => state.auth);
	if (data) {
		var { name, image, author, year, category, _id } = data;
	}

	const handleDelete = () => {
		try {
			axios.delete(`http://localhost:8000/api/book/${_id}`);
			window.location.reload(false);
			dispatch(
				signInUserSuccess({
					error: false,
					isAuth: true
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={classes.card}>
			<div>
				<img className={classes.img} alt="complex" src={image} />
			</div>
			<div>
				<div><b>Book Name :</b>{name}</div>
				<div><b>Author :</b> {author}</div>
				<div><b>Category :</b>{category}</div>
				<div><b>Year :</b>{year}</div>
				<Button color = "secondary" onClick={() => handleClick(_id)}>
					Chapters
			    </Button>
				<br/>
				<br/>
				<Button variant="contained" onClick={handleDelete}>Delete</Button>
				<Link to={`/editbook/${_id}`} style = {{textDecoration : "none"}}>
					<Button variant="contained">Edit</Button>
				</Link>
			</div>
		</div>
	);
}
