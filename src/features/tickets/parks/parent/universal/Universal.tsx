import React from 'react';
import ParksHandler from '../../common/Parks.handler';
import ParkDetails from '../../details/ParkDetails';

const Universal: React.FC = () => {
	const handler: ParksHandler = new ParksHandler();

	return (
		<React.Fragment>
			{handler.getUniversalParks().map(park => (
				<ParkDetails key={park.Id} park={park} />
			))}
		</React.Fragment>
	);
};

export default Universal;
