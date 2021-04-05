import expensesReducer from '../../store/reducers/expenses'

import { expenses } from '../fixtures/expenses'

import * as expenseActions from '../../store/actions/expenses'

const initialState = { expenses }

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  // we start app with some dummy expenses - expect test to fail after we remove dummy expenses
  expect(state).toEqual({ expenses })
})

test('should set expenses', () => {
  const state = expensesReducer({}, expenseActions.setExpensesToStore(expenses))
  // we start app with some dummy expenses - expect test to fail after we remove dummy expenses
  expect(state).toEqual({ expenses })
})

test('should remove expense by id', () => {
  const state = expensesReducer(initialState, expenseActions.removeExpenseFromStore(expenses[1]._id))

  expect(state).toEqual({ expenses: [expenses[0]] })
})

test('should return state after no id is found for removing', () => {
  const state = expensesReducer(initialState, expenseActions.removeExpenseFromStore('fakeId'))

  expect(state).toEqual(initialState)
})

test('should add expense to state', () => {
  const state = expensesReducer(initialState, expenseActions.addExpenseToStore(expenses[1]))

  expect(state).toEqual({ expenses: [...expenses, expenses[1]] })
})

test('should edit expense by id', () => {
  const editeExpense = { ...expenses[1], title: 'Updated' }
  const state = expensesReducer(initialState, expenseActions.editExpenseInStore(editeExpense))

  expect(state).toEqual({ expenses: [expenses[0], editeExpense] })
})

test('should return state after no id is found for editing', () => {
  const editeExpense = { ...expenses[1], title: 'Updated', _id: 'fakeId' }
  const state = expensesReducer(initialState, expenseActions.editExpenseInStore(editeExpense))

  expect(state).toEqual({ expenses })
})

test('should clear expense state', () => {
  const state = expensesReducer(initialState, expenseActions.clearExpenses())

  expect(state).toEqual({ expenses: [] })
})