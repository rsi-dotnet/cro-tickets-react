import React from 'react';
import App from './App';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../.test-results.json';
import Paths from '../utilities/routing/Path';

export default {
	title: 'App',
	component: App,
	decorators: [withA11y, withTests({ results })],
	parameters: {
		jest: ['App'],
	},
};

export const Default = (): JSX.Element => <App paths={Paths()}></App>;
