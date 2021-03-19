import { isToday } from 'date-fns'

export const calculateTotal = expenses => expenses.reduce((acc, item) => {
  return acc += item.amount
}, 0)

export const calculateTodayExpenses = expenses => expenses.reduce((acc, item) => {
  if (isToday(new Date(item.expenseDate))) {
    return acc += item.amount
  }
  return acc
}, 0)