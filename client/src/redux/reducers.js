import { combineReducers } from 'redux';

const phoneConnected = (state = false, action) => {
	switch (action.type) {
		case 'changePhoneConnected':
			return !state;
		default:
			return state;
	}
};

const mobile = (state = false, action) => {
	switch (action.type) {
		case 'setMobile':
			return true;

		default:
			return state;
	}
};

const Masterducer = combineReducers({
	phoneConnected,
	mobile,
});

export default Masterducer;
