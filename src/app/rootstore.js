import { makeAutoObservable, autorun, runInAction, reaction } from "mobx"
import React from "react";
import IdeaStore from "../idea/ideastore";
import UserStore from "../user/userstore";

class RootStore {
	
	constructor(){
		makeAutoObservable(this);
	}

	ideaStore = new IdeaStore()
	userStore = new UserStore()
}


const RootContext = React.createContext();

const RootContextProvider = ({ children, store }) => {
  return (
		<RootContext.Provider value={ store } >
			{ children }
		</RootContext.Provider>
  );
};

const useRootStore = () => React.useContext(RootContext);

export { RootStore, RootContextProvider, useRootStore };