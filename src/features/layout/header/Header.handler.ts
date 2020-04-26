import String from '../../../utilities/strings/StringUtilities';

export const IsActive = (cssClass: string): string => {
	return cssClass === String.Empty ? 'is-active' : String.Empty;
};
