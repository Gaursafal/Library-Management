import React, { useEffect } from 'react';
import ChaptersCard from './ChaptersCard';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setChaptersData } from '../../redux/App/actions';
import axios from 'axios';

const useStyles = makeStyles(() => ({
	div: {
		margin: '30px'
	}
}));

export default function ChaptersPage(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const chaptersData = useSelector((state) => state.app.chaptersData) || [];
	useEffect(
		() => {
			axios({
				method: 'get',
				url: `http://localhost:8000/api/book/` + props.match.params.id
			})
				.then((res) => dispatch(setChaptersData(res.data)))
				.catch((error) => console.log(error));
		},
		[ dispatch ]
	);
	console.log(chaptersData);
	return (
		<div>
			<h1>Chapters Details -</h1>
			{chaptersData.chapters &&
				chaptersData.chapters.map((item, id) => (
					<div key={id} className={classes.div}>
						<ChaptersCard data={item} />
					</div>
				))}
		</div>
	);
}
