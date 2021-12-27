import { makeObservable, observable } from "mobx";

export default class User {

	constructor() {
		makeObservable(this,{
			id: observable,
			firstname: observable,
			lastname: observable,
			email: observable,
			avataruri: observable
		});
	}

	id;
	firstname;
	lastname;
	email;
	avataruri;
	
}