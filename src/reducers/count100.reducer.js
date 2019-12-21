import { initialState } from './initialState';
import { INC100, DEC100 } from './constants/reducer';

export const count100Reducer = (count100 = initialState.count100, action) => {
	if (action.type === INC100) {
		return count100 + 100;
	}
	if (action.type === DEC100) {
		return count100 - 100;
	}
	return count100;
};
