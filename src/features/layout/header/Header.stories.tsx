import Header from './Header';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.test-results.json';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export default {
	title: 'Header',
	component: Header,
	decorators: [withA11y, withTests({ results })],
	parameters: {
		jest: ['Header'],
	},
};

export const Default = (): JSX.Element => (
	<MemoryRouter>
		<Header />
	</MemoryRouter>
);
