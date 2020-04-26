import LandingMenu from './LandingMenu';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from '../../../../.test-results.json';
import React from 'react';

export default {
	title: 'LandingMenu',
	component: LandingMenu,
	decorators: [withA11y, withTests({ results })],
	parameters: {
		jest: ['LandingMenu'],
	},
};

export const Default = (): JSX.Element => <LandingMenu />;
