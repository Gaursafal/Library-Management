import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './App/reducer';
import authReducer from './Auth/authReducer';

const rootReducer = combineReducers({
	app: reducer,
	auth: authReducer
});

const thunk = (store) => (next) => (action) => {
	typeof action === 'function' ? action(store.dispatch) : next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
