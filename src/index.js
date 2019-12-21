import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Step 2
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { countReducer } from './reducers/count.reducer';
import { count100Reducer } from './reducers/count100.reducer';

// Step 3.1 // Step 3.2 state, action // Step 3.3 return state

// Step 1 // Step 3 - reducer
const rootReducer = combineReducers({ count: countReducer, count100: count100Reducer });
const store = createStore(rootReducer);

ReactDOM.render(
	// Step 5
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
