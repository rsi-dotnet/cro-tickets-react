import LinkPath from './LinkPath';
import LandingIndex from '../../features/layout/landing/index/LandingIndex';
import Universal from '../../features/tickets/parks/parent/universal/Universal';

export default {
	Universal: new LinkPath('/Universal', 'Universal', Universal),
	SeaWorld: '/SeaWorld',
	BuschGardens: '/BuschGardens',
	Disney: '/Disney',
	California: '/California',
	Texas: '/Texas',
	Florida: '/Florida',
	Home: new LinkPath('/', 'Home', LandingIndex),
};
