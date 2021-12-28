import { makeAutoObservable } from "mobx";
import {
	SparklesIcon,
	ShoppingCartIcon,

} from '@heroicons/react/solid'
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

	ideaIndex = {
		'abc-123' : {
			id: 'abc-123',
			name: 'Idea Name 1',
			datetime: '1/2/2004',
			category: 'DeFi',
			description: 'This is a description of the idea',
			ownerid: '0x827DCAB38F00624466A99211e9c5a48b9D6Ec14C',
			contractdetails: null
		},

		'abc-124' : {
			id: 'abc-124',
			name: 'Idea Name 2',
			datetime: '1/4/2004',
			category: 'Art',
			description: 'This is a description of the idea',
			ownerid: '0x827DCAB38F00624466A99211e9c5a48b9D6Ec14C',
			contractdetails: null
		},

		'abc-125' : {
			id: 'abc-125',
			name: 'Idea Name 3',
			datetime: '1/3/2004',
			category: 'SaSS',
			description: 'This is a description of the idea',
			ownerid: '0x827DCAB38F00624466A99211e9c5a48b9D6Ec14C',
			contractdetails: null
		}
	};

	browseListings = new DynamicCollection();
	contractTemplates = new DynamicCollection();

	selectedSortMethod = this.sortingMethods.find(t => t.isDefault);

	async fetchListings() {
		let ids = ['abc-123', 'abc-124', 'abc-125'];
		await this.browseListings.loadCollection(async () => {
			return ids;
		});
		debugger;
	}

	get sortedListings() {
		return this.browseListings.collection.map(ideaId => this.ideaIndex[ideaId]);
	}

	changeSortMethod(sortMethod) {
		this.selectedSortMethod = sortMethod;
	}
}