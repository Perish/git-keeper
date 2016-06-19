import {
	GET_USER,
	GET_REPOS
} from '../constants/GitTypes';

import {
	combineReducers
} from 'redux';

import {
	routerReducer
} from 'react-router-redux';

const initialState = {
	infos: []
};

function rt(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return Object.assign({}, state, {
				infos: action.infos
			})
		case GET_REPOS:
			return Object.assign({}, state, {
				repos: action.repos
			})
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	rt,
	routing: routerReducer
});

export default rootReducer;