export const calculateTotal = expenses => expenses.reduce((acc, item) => {
  return acc += item.amount
}, 0)