import { INC, DEC } from './constants/reducer';

export const increment = () => {
	return {
		type : INC
	};
};

export const decrement = () => {
	return {
		type : DEC
	};
};
