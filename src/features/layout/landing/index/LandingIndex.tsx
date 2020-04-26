import React from 'react';
import LandingMenu from '../menu/LandingMenu';

const LandingIndex: React.FC = () => {
	return (
		<div className="columns">
			<div className="column is-one-quarter">
				<LandingMenu />
			</div>
			<div className="column">
				<p className="content">Welcome to Cro Tickets!</p>
			</div>
		</div>
	);
};

export default LandingIndex;
