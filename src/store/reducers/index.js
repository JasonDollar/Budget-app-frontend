import {combineReducers} from 'redux'
import expenseReducer from './expenses'

const rootReducer = combineReducers({
  expenses: expenseReducer
})

export default rootReducer