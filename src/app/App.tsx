import React from 'react';
import '../../node_modules/bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LinkPath from '../utilities/routing/LinkPath';
import Header from '../features/layout/header/Header';
import Footer from '../features/layout/footer/Footer';
import './App.css';

const App: React.FC<AppProps> = ({ paths }) => {
	return (
		<Router>
			<Header />
			<main aria-label="main" role="main" className="main">
				<div className="container">
					<Switch>
						{paths.map((path, index) => (
							<Route key={index + path.PathName} path={path.Path} component={path.Component}></Route>
						))}
					</Switch>
				</div>
			</main>
			<Footer />
		</Router>
	);
};

interface AppProps {
	paths: Array<LinkPath>;
}

export default App;
