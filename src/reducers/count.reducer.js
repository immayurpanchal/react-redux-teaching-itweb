import { initialState } from './initialState';
import { INC, DEC } from './constants/reducer';

export const countReducer = (count = initialState.count, action) => {
	if (action.type === INC) {
		return count + 1;
	}
	if (action.type === DEC) {
		return count - 1;
	}
	return count;
};
