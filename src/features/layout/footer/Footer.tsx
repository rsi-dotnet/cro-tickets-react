import React from 'react';

const Footer: React.FC = () => {
	return (
		<div className="container">
			<footer className="footer">
				<div className="content has-text-centered">
					<strong>Cro Tickets</strong> - {new Date().getFullYear()}&reg;
				</div>
			</footer>
		</div>
	);
};

export default Footer;
