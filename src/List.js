import React from 'react';
import { connect } from 'react-redux';
import { increment } from './reducers/count.action';
import { increment100, decrement100 } from './reducers/count100.action';

const List = (props) => {
	return (
		<div>
			<button onClick={() => props.increment()}>increment value</button>
			<button onClick={() => props.decrement()}>decrement value</button>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		count    : state.count,
		count100 : state.count100
	};
};

const mapDispatchProps = (dispatch) => {
	return {
		increment : () => {
			dispatch(increment());
			dispatch(increment100());
		},
		decrement : () => dispatch(decrement100())
	};
};
export default connect(mapStateToProps, mapDispatchProps)(List);
