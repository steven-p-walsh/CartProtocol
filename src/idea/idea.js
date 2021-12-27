import { makeObservable, observable } from "mobx";


export default class Idea {
	
	constructor() {
		makeObservable(this,{
			name: observable,
			category: observable,
			description: observable,
			ownerid: observable,
			contractDetails: observable
		});
	}

	name;
	category;
	description;
	ownerid;
	contractDetails;

}