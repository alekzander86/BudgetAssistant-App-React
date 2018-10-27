import {INCOME_TYPES_FETCHED} from '../actionTypes';
import {createSelector} from 'reselect';


export default function income (state = { }, action = { }){
    switch(action.type){
        case INCOME_TYPES_FETCHED:
            return { ...state, ...action.data.entities.incomeTypes }
        default: return state;
    }
}

// SELECTORS

export const incomeTypesSelector = state => state.incomeTypes;

export const allIncomeTypesSelector = createSelector(incomeTypesSelector, incomeTypesHash =>
  Object.values(incomeTypesHash)
);