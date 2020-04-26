import LandingMenu from './LandingMenu';
import React from 'react';
import { RenderWithRouter } from '../../../../utilities/tests/TestUtilities';

describe('Landing Menu', () => {
	it('Renders', () => {
		expect(() => RenderWithRouter(<LandingMenu />)).not.toThrow();
	});
});
