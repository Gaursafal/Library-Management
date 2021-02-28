import { SET_BOOK_DATA, SET_CHAPTERS_DATA } from './actionTypes';

export const setBookData = (payload) => ({
	type: SET_BOOK_DATA,
	payload
});

export const setChaptersData = (payload) => ({
	type: SET_CHAPTERS_DATA,
	payload
});
