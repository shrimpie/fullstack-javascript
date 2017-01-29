import React from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
import Header from './Header';
import ContestPreview from './ContestPreview';
// import data from '../testData';

class App extends React.Component {

	state = {
		pageHeader: 'Naming Contests',
		contests: []
	};

	componentDidMount() {

		axios.get('api/contests')
			.then(resp => {
				this.setState({
					contests: resp.data.contests
				});
				// console.log(resp.data.contests);
			})
			.catch(console.error)
	}

	componentWillUnmount() {
		// clean timers and listeners.
	}

	render() {
		return (
			<div className="App">
				<Header message={ this.state.pageHeader } />
				<div>
					{ this.state.contests.map(contest =>
						<ContestPreview key={contest.id} { ...contest } />
					)}
				</div>
			</div>
		);
	}
}

export default App;




