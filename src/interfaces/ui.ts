export interface IApiCallState {
  name: string,
  loading: boolean,
  error?: null | string
}

export interface IFilter { 
  search: string
  category: string
  dateRangeStart?: Date | string
  dateRangeEnd?: Date | string
  sortBy: 'DATE' | 'AMOUNT' | string
  sortDirection: 'ASC' | 'DESC' | string
}

export interface INotification {
  id: string,
  message: string
}