import React from 'react';
import { connect } from 'react-redux';

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
			dispatch({ type: 'INC' });
			dispatch({ type: 'INC100' });
		},
		decrement : () => dispatch({ type: 'DEC' })
	};
};
export default connect(mapStateToProps, mapDispatchProps)(List);
