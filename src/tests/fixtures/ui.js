import { apiCallsNames as api } from '../../config/config'

export const ui =  {
  apiCalls: [
    { name: api.saveNewExpense, loading: false, error: {} },
    { name: api.saveEditExpense, loading: false, error: {} },
    { name: api.removeExpense, loading: false, error: {} },
    { name: api.saveCurrency, loading: false, error: {} },
    { name: api.removeCategory, loading: false, error: {} },
    { name: api.fetchExpenses, loading: false, error: {} },
    { name: api.fetchUser, loading: false, error: {} },
    { name: api.loginUser, loading: false, error: {} },
    { name: api.registerUser, loading: false, error: {} },
    { name: api.resetPassword, loading: false, error: {} },
  ],
  filter: {
    search: '',
    dateRangeStart: '',
    dateRangeEnd: '',
    sortBy: 'DATE',
    sortDirection: 'ASC',
    category: ''
  },
  notifications: []
}