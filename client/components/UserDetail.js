import React, {
	Component
} from 'react';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {
	List,
	ListItem
} from 'material-ui/List';

import {
	Link
} from 'react-router';

const paperStyle = {
	width: 480,

}

class UserDetail extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.infos);
	}
	render() {
		let {
			infos
		} = this.props;
		return (
			<Paper style={paperStyle}>
		    	<Avatar size={100} src={infos.avatar_url} />
			      <List>
			      	<Link to={`repos/${infos.login}`}>
				        <ListItem
				          primaryText="发布的公共库"
				          secondaryText={infos.public_repos}
				        />
				    </Link>
			        <ListItem
			          primaryText="登陆名"
			          secondaryText={infos.login}
			        />
			        <ListItem
			          primaryText="GitHub主页"
			          secondaryText={infos.html_url}
			        />
			        <ListItem
			          primaryText="用户名"
			          secondaryText={infos.name}
			        />
			        <ListItem
			          primaryText="公司"
			          secondaryText={infos.company || '暂无'}
			        />
			        <ListItem
			          primaryText="地址"
			          secondaryText={infos.location}
			        />
			      </List>
		    </Paper>
		)
	}
}

export default UserDetail;