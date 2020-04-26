import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
	it('Renders', () => {
		expect(() => render(<Footer />)).not.toThrow();
	});
});
