import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContextClick }) => (
	<div className="ContestList">
			{ Object.keys(contests).map(contestId =>
				<ContestPreview
					key={contestId}
					onClick={onContextClick}
					{ ...contests[contestId] } />
			)}
	</div>
);

ContestList.propTypes = {
	contests: React.PropTypes.object,
	onContextClick: React.PropTypes.func.isRequired,
};

export default ContestList;


