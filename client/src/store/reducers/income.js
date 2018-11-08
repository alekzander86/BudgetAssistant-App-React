import {INCOME_TYPES_FETCHED, CLEAR_INCOME_TYPES} from '../actionTypes';
import {createSelector} from 'reselect';


export default function incomeTypes (state = [], action = { }){
    switch(action.type){
        case INCOME_TYPES_FETCHED:
            return action.data
        case CLEAR_INCOME_TYPES:
            return []
        default: return state;
    }
}

 // SELECTORS
 const TypeSelector = (state) => state.incomeTypes;

 export const allTypeSelector = createSelector(TypeSelector, TypesHash =>
   // console.log(Object.values(TypesHash))
   Object.values(TypesHash)

 );

