import React from 'react';
import { Link } from 'react-router-dom';
import String from '../../../utilities/strings/StringUtilities';
import { IsActive } from './Header.handler';
import RoutePaths from '../../../utilities/routing/RoutePaths';

const Header: React.FC = () => {
	const [menuIsActive, setMenuIsActive] = React.useState(String.Empty);
	const [burgerIsActive, setBurgerIsActive] = React.useState(String.Empty);

	const toggleBurger = (): void => {
		setMenuIsActive(IsActive(menuIsActive));
		setBurgerIsActive(IsActive(burgerIsActive));
	};

	return (
		<header>
			<nav className="navbar container" role="navigation" aria-label="main navigation">
				{/* eslint-disable-next-line */}
				<a role="button" className={`navbar-burger ${burgerIsActive}`} aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
					<span aria-hidden="true"></span>
				</a>
				<div className={`navbar-menu ${menuIsActive}`}>
					<div className="navbar-start">
						<Link to={RoutePaths.Home.Path} className="navbar-item">
							Home
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
