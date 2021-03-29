import { createSelector } from 'reselect'
import { selectFilters } from './ui'

import expenseFilter from '../../lib/expenseFilter'

const selectExpenses = state => state.expenses

export const selectAllExpenses = createSelector(
  [selectExpenses, selectFilters],
  (state, filters) => expenseFilter(state.expenses, filters)
)


export const selectSingleExpense = id => createSelector(
  [selectAllExpenses],
  expenses => (expenses ? expenses.find(item => item._id === id) : null),
)