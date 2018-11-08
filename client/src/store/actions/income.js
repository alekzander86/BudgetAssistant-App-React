import {INCOME_TYPES_FETCHED, CLEAR_INCOME_TYPES} from '../actionTypes';
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

// export const fetchIncomeTypes = () =>(dispatch)=>
//   api.income.fetchTypes().then(items=>
//   dispatch(incomeTypesFetched(normalize(items,[itemsSchema]))));

  export const fetchIncomeTypes = () =>(dispatch)=>
  api.income.fetchTypes().then(incomeTypes=>
  dispatch(incomeTypesFetched(incomeTypes)));



