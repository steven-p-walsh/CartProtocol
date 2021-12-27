import { action, makeObservable, observable } from "mobx";

export default class IdeaStore {

	constructor() {
		makeObservable(this,{
			listings: observable,
			fetchListings: action
		});
	}

	listings = [];

	fetchListings() {

	}

}