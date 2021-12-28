import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import DynamicCollection from "../core/dynamiccollection";

export default class IdeaStore {

	constructor() {
		makeAutoObservable(this);
		this.selectedSortMethod = this.sortingMethods.find(t => t.isDefault);
	}

	categories = [
		{ name: 'DeFi', icon: '' },
		{ name: 'Gaming', icon: '' },
		{ name: 'Art', icon: 'sparkles' },
		{ name: 'SaSS', icon: '' },
		{ name: 'eCommerce', icon: 'shopping-cart' },
		{ name: 'Random', icon: 'shopping-cart' }
	]

	sortingMethods = [
		{ name: 'Recent', isDefault: true },
		{ name: 'Most Active' }
	];

	ideaIndex = {};
	browseListings = new DynamicCollection();
	contractTemplates = new DynamicCollection();

	selectedSortMethod = this.sortingMethods.find(t => t.isDefault);

	changeSortMethod(sortMethod) {
		this.selectedSortMethod = sortMethod;
	}

	filterByCategory(category) {

	}

	macroFilter(filter) {

	}
}