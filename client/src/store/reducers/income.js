import {INCOME_TYPES_FETCHED, CLEAR_INCOME_TYPES} from '../actionTypes';
import {createSelector} from 'reselect';


export default function income (state = { }, action = { }){
    switch(action.type){
        case INCOME_TYPES_FETCHED:
        case CLEAR_INCOME_TYPES:
            return {...state, ...action.data.entities}
        default: return state;
    }
}

 // SELECTORS
 export const incomeTypesSelector = state => state.income;

 export const allIncomeTypesSelector = createSelector(incomeTypesSelector, incomeTypesHash =>
   Object.values(incomeTypesHash)
 );

