import React from 'react';
import {
	render
} from 'react-dom';

import {
	Provider
} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';
import SearchUser from './components/SearchUser';

// Normalize css
import css from './styles/main.css';

import store from './store';

import Repos from './components/Repos';

import {
	history
} from './store';

import {
	Router,
	Route,
	IndexRoute
} from 'react-router';

injectTapEventPlugin();

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={Main}>
				<IndexRoute component={SearchUser}></IndexRoute>
				<Route path="/repos/:username" component={Repos}></Route>
			</Route>
		</Router>
	</Provider>, document.getElementById('root'));