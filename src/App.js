import React from 'react';
import { connect } from 'react-redux';
import List from './List';

function App (props){
	return (
		<div className='App'>
			<h1>1 is : {props.count}</h1>
			<h1>100 is : {props.count100}</h1>
			<List />
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		count    : state.count,
		count100 : state.count100
	};
};
export default connect(mapStateToProps)(App);
