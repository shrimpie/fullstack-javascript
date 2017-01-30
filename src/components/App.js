import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => 
	window.history.pushState(obj, '', url);

const onPopState = handler => {
	window.onpopstate = handler;
};

class App extends React.Component {

	static propTypes = {
		initialData: React.PropTypes.object.isRequired,
	}

	state = this.props.initialData;

	componentDidMount() {
		onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			})
		});
	}

	componentWillUnmount() {
		onPopState(null);
	}

	fetchContest = (contestId) => {
		pushState(
			{currentContestId: contestId },
			`/contest/${contestId}`
		);

		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId: contest.id,
				contests: {
					...this.state.contests,
					[contest.id]: contest
					// this contest.id key's value got 
					// overided by above expression.
					// It adds one more description key-value pair.
				}
			});
		});
	};


	fetchContestList = () => {
		pushState(
			{currentContestId: null },
			'/'
		);

		api.fetchContestList().then(contests => {
			this.setState({
				currentContestId: null,
				contests
			});
		});
	};

	pageHeader() {
		if(this.state.currentContestId) {
			return this.currentContest().contestName;
		}
		return 'Naming Contests';
	}

	currentContest() {
		return this.state.contests[this.state.currentContestId];
	}

	currentContent() {
		if(this.state.currentContestId) {
			return <Contest
						contestListClick={this.fetchContestList}
						{...this.currentContest()} />;
		}
		return <ContestList
					onContextClick={this.fetchContest}
					contests={this.state.contests} />;
	}

	render() {
		return (
			<div className="App">
				<Header message={ this.pageHeader() } />
				{ this.currentContent() }
			</div>
		);
	}
}

export default App;




