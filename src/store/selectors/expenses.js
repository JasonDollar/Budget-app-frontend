import { createSelector } from 'reselect'

const selectExpenses = state => state.expenses

export const selectAllExpenses = createSelector(
  [selectExpenses],
  state => state.expenses
)
