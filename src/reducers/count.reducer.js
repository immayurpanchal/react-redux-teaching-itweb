import { initialState } from './initialState';

export const countReducer = (count = initialState.count, action) => {
	if (action.type === 'INC') {
		return count + 1;
	}
	if (action.type === 'DEC') {
		return count - 1;
	}
	return count;
};
