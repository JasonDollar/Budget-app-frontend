import { createSelector } from 'reselect'

const selectExpenses = state => state.expenses

export const selectAllExpenses = createSelector(
  [selectExpenses],
  state => state.expenses
)


export const selectSingleExpense = id => createSelector(
  [selectAllExpenses],
  expenses => console.log(id) || (expenses ? expenses.find(item => item._id === id) : null),
)