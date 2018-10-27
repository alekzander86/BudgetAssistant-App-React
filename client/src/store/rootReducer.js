import {combineReducers} from 'redux';
import user from './reducers/user';
import income from './reducers/income';

export default combineReducers({
    user,
    income
});