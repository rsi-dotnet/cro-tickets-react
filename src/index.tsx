import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import Paths from './utilities/routing/Path';

ReactDOM.render(
	<React.StrictMode>
		<App paths={Paths()} />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
