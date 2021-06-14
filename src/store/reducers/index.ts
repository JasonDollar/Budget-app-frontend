import {combineReducers} from 'redux'
import expenseReducer from './expenses'
import userReducer from './user'
import uiReducer from './ui'

const rootReducer = combineReducers({
  expenses: expenseReducer,
  user: userReducer,
  ui: uiReducer
})

export default rootReducer

export type TRootState = ReturnType<typeof rootReducer>