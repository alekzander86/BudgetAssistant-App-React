import {combineReducers} from 'redux';
import user from './reducers/user';
import  incomeTypes from './reducers/income';

export default combineReducers({
    user,
    incomeTypes
});