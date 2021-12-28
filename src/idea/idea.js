import { makeAutoObservable } from "mobx";


export default class Idea {
	
	constructor() {
		makeAutoObservable(this);
	}

	name;
	category;
	description;
	ownerid;
	contractdetails;

}