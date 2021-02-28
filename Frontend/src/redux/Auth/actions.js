import { SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE } from './actionTypes';

export const signInUserRequest = (payload) => ({
	type: SIGNIN_USER_REQUEST,
	payload
});

export const signInUserSuccess = (payload) => ({
	type: SIGNIN_USER_SUCCESS,
	payload
});

export const signInUserFailure = (payload) => ({
	type: SIGNIN_USER_FAILURE,
	payload
});
