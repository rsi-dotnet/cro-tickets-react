import Header from './Header';
import React from 'react';
import { RenderWithRouter } from '../../../utilities/tests/TestUtilities';
import { IsActive } from './Header.handler';
import StringUtility from '../../../utilities/strings/StringUtilities';

describe('Header', () => {
	it('Renders', () => {
		expect(() => RenderWithRouter(<Header />)).not.toThrow();
	});

	it('Is Active empty string, returns correct response', () => {
		expect(IsActive(StringUtility.Empty())).toStrictEqual('is-active');
	});

	it('Is Active css active string, returns correct response', () => {
		expect(IsActive('is-active')).toStrictEqual(StringUtility.Empty());
	});
});
