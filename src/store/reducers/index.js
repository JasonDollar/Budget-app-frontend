import {combineReducers} from 'redux'
import expenseReducer from './expenses'
import userReducer from './user'

const rootReducer = combineReducers({
  expenses: expenseReducer,
  user: userReducer
})

export default rootReducer