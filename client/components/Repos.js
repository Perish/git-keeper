import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';


import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {
	List,
	ListItem
} from 'material-ui/List';

import {
	fetchRepos
} from '../actions/User';

const paperStyle = {
	width: 480,
	margin: '0 auto',
	marginTop: 30,

}

class Repos extends Component {
	componentDidMount() {

		let username = this.props.params.username;
		let {
			fetchRepos
		} = this.props;
		fetchRepos(username);
	}
	renderListItem(repos) {
		console.log('renderrepos', repos)
		if (repos !== undefined) {
			return repos.map((rep) =>
				<ListItem key={rep.id}
				          primaryText={rep.name}
				          secondaryText={rep.description}
				        />
			);
		} else {
			return <ListItem
	          primaryText='还没有创建公共库'
	        />
		}
	}

	render() {
		let {
			repos
		} = this.props;
		return (
			<Paper style={paperStyle}>
			      <List>
			      {this.renderListItem(repos)}
			      </List>
		    </Paper>
		)
	}
}

function mapStateToProps(state) {
	return {
		repos: state.rt.repos,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchRepos: (username) => dispatch(fetchRepos(username))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Repos);