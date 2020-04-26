import React from 'react';
import LandingIndex from './LandingIndex';
import { RenderWithRouter } from '../../../../utilities/tests/TestUtilities';

describe('Landing Index', () => {
	it('Renders', () => {
		expect(() => RenderWithRouter(<LandingIndex />)).not.toThrow();
	});
});
