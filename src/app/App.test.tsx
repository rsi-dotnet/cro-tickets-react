import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Paths from '../utilities/routing/Path';

describe('App', () => {
	it('Renders', () => {
		expect(() => render(<App paths={Paths()} />)).not.toThrow();
	});

	it('renders learn react link', () => {
		const { getByText } = render(<App paths={Paths()} />);
		const linkElement = getByText(/Cro Tickets/);
		expect(linkElement).toBeInTheDocument();
	});
});
