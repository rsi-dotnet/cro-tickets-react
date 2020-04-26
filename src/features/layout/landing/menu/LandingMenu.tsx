import React from 'react';
import { Link } from 'react-router-dom';
import RoutePaths from '../../../../utilities/routing/RoutePaths';

const LandingMenu: React.FC = () => {
	return (
		<div className="box">
			<aside className="menu">
				<p className="menu-label">By Category</p>
				<ul className="menu-list">
					<li>
						<Link to={RoutePaths.Universal.Path}>{RoutePaths.Universal.PathName}</Link>
					</li>
					<li>
						<Link to="/SeaWorld">Sea World</Link>
					</li>
					<li>
						<Link to="/Busch Gardens">Busch Gardens</Link>
					</li>
					<li>
						<Link to="/Disney">Disney</Link>
					</li>
				</ul>
				<p className="menu-label">By State</p>
				<ul className="menu-list">
					<li>
						<Link to="/California">California</Link>
					</li>
					<li>
						<Link to="/Texas">Texas</Link>
					</li>
					<li>
						<Link to="/Florida">Florida</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default LandingMenu;
