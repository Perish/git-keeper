export function getUser(username) {
	return fetch(`https://api.github.com/users/${username}`)
		.then(response => response.json())
		.then()
}