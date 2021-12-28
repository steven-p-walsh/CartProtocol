import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import Landing from './home/components/landing';
import reportWebVitals from './reportWebVitals';
import BrowseLayout from './idea/components/browse';
import IdeaDetailPage from './idea/components/ideadetailpage';
import { RootContextProvider, RootStore } from './app/rootstore';

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
		<RootContextProvider store={ rootStore } >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/ideas/" element={ <BrowseLayout /> } >
					</Route>
					<Route path="/ideas/:ideaid" element={ <IdeaDetailPage /> } >
					</Route>
				</Routes>
			</BrowserRouter>
		</RootContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
