import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export default class UserStore {

	constructor() {
		makeAutoObservable(this);
	}

	currentUser = null;

}