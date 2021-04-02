import * as types from '../actions/actionTypes'

import { apiCallsNames as api } from '../../config/config'

const initialState = {
  apiCalls: [
    { name: api.saveNewExpense, loading: false, error: '' },
    { name: api.saveEditExpense, loading: false, error: '' },
    { name: api.removeExpense, loading: false, error: '' },
    { name: api.saveCurrency, loading: false, error: '' },
    { name: api.removeCategory, loading: false, error: '' },
    { name: api.fetchExpenses, loading: false, error: '' },
    { name: api.fetchUser, loading: false, error: '' },
  ],
  filter: {
    search: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    sortBy: 'DATE',
    sortDirection: 'ASC',
    category: ''
  }
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.API_CALL_START:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            loading: true,
            error: ''
          }
        })
      }
    case types.API_CALL_FINISH_SUCCESS:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            name: action.payload.name,
            loading: false,
            error: ''
          }
        })
      }
    case types.API_CALL_FINISH_FAIL:
      return {
        ...state,
        apiCalls: state.apiCalls.map(item => {
          if (item.name !== action.payload.name) { return item }
          return {
            ...item,
            name: action.payload.name,
            loading: false,
            error: {
              message: action.payload.error?.message,
              errorData: action.payload.error?.response?.data
            }
          }
        })
      }
    case types.UPDATE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default uiReducer