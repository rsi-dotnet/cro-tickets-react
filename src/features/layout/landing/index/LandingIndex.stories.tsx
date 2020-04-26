import LandingIndex from './LandingIndex';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../../../../.test-results.json';
import { MemoryRouter } from 'react-router-dom';

export default {
	title: 'LandingIndex',
	component: LandingIndex,
	decorators: [withA11y, withTests({ results })],
	parameters: {
		jest: ['LandingIndex'],
	},
};

export const Default = (): JSX.Element => (
	<MemoryRouter>
		<LandingIndex />
	</MemoryRouter>
);
