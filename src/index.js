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
import PageLayout from './market/components/pagelayout';
import IdeaDetailPage from './idea/components/ideadetailpage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/market" element={ <PageLayout /> } >
				</Route>
				<Route path="/idea" element={ <IdeaDetailPage /> } >
				</Route>
			</Routes>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
