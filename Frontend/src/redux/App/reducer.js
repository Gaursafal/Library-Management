import { SET_BOOK_DATA, SET_CHAPTERS_DATA } from './actionTypes';

let initState = {
	bookData: [],
	chapterData: []
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case SET_BOOK_DATA:
			return {
				...state,
				bookData: payload
			};
		case SET_CHAPTERS_DATA:
			return {
				...state,
				chaptersData: payload
			};

		default:
			return state;
	}
};

export default reducer;
