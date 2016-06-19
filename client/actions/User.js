import fetch from 'isomorphic-fetch';
import * as types from '../constants/GitTypes';

export function fetchUser(username) {
	return function(dispatch) {
		return fetch(`https://api.github.com/users/${username}`)
			.then(response => response.json())
			.then((json) => {
				console.log(json);
				dispatch(getUser(json));
			});
	}
}

export function fetchRepos(username) {
	return function(dispatch) {
		return fetch(`https://api.github.com/users/${username}/repos`)
			.then(response => response.json())
			.then((json) => {
				console.log('repos', json)
				dispatch(getRepos(json));
			})
	}
}

export function getUser(infos) {
	return {
		type: types.GET_USER,
		infos
	}
}

export function getRepos(repos) {
	return {
		type: types.GET_REPOS,
		repos
	}
}