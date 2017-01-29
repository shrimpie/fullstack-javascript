import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class App extends React.Component {

	state = {
		pageHeader: 'Naming Contests'
	};

	componentDidMount() {

		// ajax
		// timers
		// listeners

	}

	componentWillUnmount() {

		// clean timers and listeners.
	}

	render() {
		return (
			<div className="App">
				<Header message={ this.state.pageHeader } />
				<div>
					...
				</div>
			</div>
		);
	}
}

export default App;