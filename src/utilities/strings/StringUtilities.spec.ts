import StringUtility from './StringUtilities';

describe('String', () => {
	it('Empty returns empty string', () => {
		expect(StringUtility.Empty()).toStrictEqual('');
	});
});
