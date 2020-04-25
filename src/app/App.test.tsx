import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('Renders', () => {
		expect(() => render(<App />)).not.toThrow();
	});

	it('renders learn react link', () => {
		const { getByText } = render(<App />);
		const linkElement = getByText(/Cro Tickets/);
		expect(linkElement).toBeInTheDocument();
	});
});
