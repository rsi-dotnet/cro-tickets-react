import LinkPath from './LinkPath';
import Landing from '../../features/layout/landing/Landing';

const Paths = (): Array<LinkPath> => {
	return [new LinkPath('/', 'Home', Landing)];
};

export default Paths;
