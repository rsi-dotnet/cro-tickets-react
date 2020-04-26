import React from 'react';
import Footer from './Footer';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.test-results.json';

export default {
	title: 'Footer',
	component: Footer,
	decorators: [withA11y, withTests({ results })],
	parameters: {
		jest: ['Footer'],
	},
};

export const Default = (): JSX.Element => <Footer />;
