import { isAfter, isBefore } from 'date-fns'

const expenseFilter = (expenses, { search, category, dateRangeStart, dateRangeEnd, sortBy, sortDirection }) => {
  return expenses.filter(item => {
    const expenseDate = new Date(item.expenseDate)
    const textMatch = item.title.toLowerCase().includes(search.toLowerCase()) || (
      item.description && item.description.toLowerCase().includes(search.toLowerCase())
      )
    const categoryMatch = category ? item.category.toLowerCase() === category.toLowerCase() : true

    let dateMatch = true
    if (dateRangeStart) {
      dateMatch = isAfter(expenseDate, new Date(dateRangeStart))
    }
    if (dateRangeEnd) {
      dateMatch = isBefore(expenseDate, new Date(dateRangeEnd))
    }
    return textMatch && dateMatch && categoryMatch
  })
  .sort((a, b) => {
    if (sortBy === 'DATE') {
      let sortExpression = a.expenseDate < b.expenseDate
      if (sortDirection === 'ASC') {
        sortExpression = a.expenseDate > b.expenseDate
      } else if (sortDirection === 'DESC') {
        sortExpression = a.expenseDate < b.expenseDate
      }
      return sortExpression ? 1 : -1
    }

    if (sortBy === 'AMOUNT') {
      let sortExpression = a.amount < b.amount
      if (sortDirection === 'ASC') {
        sortExpression = a.amount > b.amount
      } else if (sortDirection === 'DESC') {
        sortExpression = a.amount < b.amount
      }
      return sortExpression ? 1 : -1
    }
  })
}

export default expenseFilter