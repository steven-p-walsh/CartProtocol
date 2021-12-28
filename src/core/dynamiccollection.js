import { makeAutoObservable, action } from "mobx";

export default class DynamicCollection {

	constructor() {
		makeAutoObservable(this);
	}

	isLoaded = false;
	isLoading = false;
	collection = [];

	async loadCollection(del) {
		this.isLoading = true;
		this.isLoaded = false;
		this.collection = await del();
		this.isLoaded = true;
	}

}