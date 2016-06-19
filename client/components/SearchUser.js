import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import {
	fetchUser
} from '../actions/User';

import UserDetail from './UserDetail';

class SearchUser extends Component {
	handleSearch() {
		let searchValue = this.refs.myInput.getValue();
		let {
			fetchUser
		} = this.props;
		fetchUser(searchValue);
	}

	showUserDetail(infos) {
		console.log('infos', infos)
		if (infos.login === undefined && infos.message === undefined) {
			return;
		}
		console.log('infos1')
		return infos.message === "Not Found" ? <Snackbar
										          open={true}
										          message="没有用户名"
										          autoHideDuration={4000}
										        /> : <UserDetail key={infos.login} infos={infos} />
	}
	render() {
		let {
			infos
		} = this.props;
		return (

			<div style={{margin: 'auto', width: 480,  textAlign: 'center', }}>
				<div style={{marginBottom: 30, marginTop: -10}}>
		        	<TextField
				      hintText="搜索GitHub上的用户信息"
				      floatingLabelText="用户名"
				      ref='myInput'
				    />
				     <RaisedButton label="搜索" onMouseDown={this.handleSearch.bind(this)}/>
				</div>
		     {
				this.showUserDetail(infos)
		     }
		     </div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchUser: (username) => {
			dispatch(fetchUser(username))
		}

	}
}

function mapStateToProps(state) {
	return {
		infos: state.rt.infos
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);