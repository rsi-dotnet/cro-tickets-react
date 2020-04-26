import Park from './Park';

class ParksHandler {
	public getAll(): Array<Park> {
		return [
			new Park('68e5685d-8578-470a-8e82-f82b9d44afb2', 'Disneyland', 'Disney'),
			new Park('5d131218-5984-4af2-90bf-2e60e780eabb', 'Universal Studio Hollywood', 'Universal'),
		];
	}

	public getUniversalParks(): Array<Park> {
		return [
			new Park('68e5685d-8578-470a-8e82-f82b9d44afb2', 'Universal Studios Florida', 'Univesal'),
			new Park('5d131218-5984-4af2-90bf-2e60e780eabb', 'Universal Studios Hollywood', 'Universal'),
		];
	}
}

export default ParksHandler;
