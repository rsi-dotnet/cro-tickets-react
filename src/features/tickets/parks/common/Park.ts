class Park {
	public Id: string;
	public Name: string;
	public Parent: string;

	constructor(id: string, name: string, parent: string) {
		this.Id = id;
		this.Name = name;
		this.Parent = parent;
	}
}

export default Park;
