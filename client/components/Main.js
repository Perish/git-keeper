import React, {
	Component
} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
	Link
} from 'react-router';

class Main extends Component {

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<AppBar
					    title="Git Keeper"
					  />
		{
			React.cloneElement(this.props.children, {...this.props})
		}
		        </div>
		  	</MuiThemeProvider>
		);
	}
}

export default Main;