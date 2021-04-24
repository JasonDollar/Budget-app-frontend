export interface IExpense {
  _id: string,
  title: string,
  amount: number,
  description?: string,
  owner: string,
  createdAt: Date,
  updatedAt: Date,
  expenseDate: Date,
  category: string,
}