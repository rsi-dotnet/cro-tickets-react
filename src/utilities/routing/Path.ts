import LinkPath from './LinkPath';
import RoutePaths from './RoutePaths';

const Paths = (): Array<LinkPath> => {
	return [RoutePaths.Universal, RoutePaths.Home];
};

export default Paths;
