import { createSelector } from 'reselect'

const selectExpenses = state => state.expenses

export const selectAllExpenses = createSelector(
  [selectExpenses],
  state => state.expenses
)


export const selectSingleExpense = id => createSelector(
  [selectAllExpenses],
  expenses => (expenses ? expenses.find(item => item._id === id) : null),
)