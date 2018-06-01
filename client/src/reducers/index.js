import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';

export default combineReducers({
	searchState: searchReducer,
	routing
});