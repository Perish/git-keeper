import {
	createStore,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/UserInfo';

import {
	browserHistory
} from 'react-router';
import {
	syncHistoryWithStore
} from 'react-router-redux';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

export const history = syncHistoryWithStore(browserHistory, store);