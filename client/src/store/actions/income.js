import {INCOME_TYPES_FETCHED, CLEAR_INCOME_TYPES, INCOME_FETCHED} from '../actionTypes';
import api from '../../services/api';
// import {normalize} from 'normalizr';
// import {itemsSchema} from '../../Schemas/income/schema'

export const incomeTypesFetched = data =>({
    type: INCOME_TYPES_FETCHED,
    data
})

export const clearIncomeTypes = () =>({
    type: CLEAR_INCOME_TYPES
})

export const registeredIncome = data =>({
    type: INCOME_FETCHED,
    data
})


// export const fetchIncomeTypes = () =>(dispatch)=>
//   api.income.fetchTypes().then(items=>
//   dispatch(incomeTypesFetched(normalize(items,[itemsSchema]))));

export const fetchIncomeTypes = () =>(dispatch)=>
api.income.fetchTypes().then(incomeTypes=>
dispatch(incomeTypesFetched(incomeTypes)));


export const registerIncome = (income) => (dispatch) => 
api.income.register(income).then(income=> dispatch(registeredIncome(income)));

