import Park from '../common/Park';
import React from 'react';

const ParkDetails: React.FC<ParkDetailsProps> = ({ park }) => {
	return (
		<div className="card">
			<div className="media-content">
				<div className="content">
					<p>{park.Name}</p>
					<p>{park.Parent}</p>
				</div>
			</div>
		</div>
	);
};

interface ParkDetailsProps {
	park: Park;
}

export default ParkDetails;
