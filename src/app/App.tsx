import React from 'react';
import '../../node_modules/bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LinkPath from '../utilities/routing/LinkPath';

const App: React.FC<AppProps> = ({ paths }) => {
	return (
		<Router>
			<div className="container">
				<Switch>
					{paths.map((path, index) => (
						<Route key={index + path.PathName} path={path.Path} component={path.Component}></Route>
					))}
				</Switch>
			</div>
		</Router>
	);
};

interface AppProps {
	paths: Array<LinkPath>;
}

export default App;
