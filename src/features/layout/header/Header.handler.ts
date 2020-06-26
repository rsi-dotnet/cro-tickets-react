import StringUtility from '../../../utilities/strings/StringUtilities';

export const IsActive = (cssClass: string): string => {
	return cssClass === StringUtility.Empty() ? 'is-active' : StringUtility.Empty();
};
