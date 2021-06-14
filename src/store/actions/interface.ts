import { EActionTypes } from './actionTypes'

import { IExpense } from '../../interfaces/expense'

interface ISetExpenses {
  type: EActionTypes.SET_EXPENSES,
  payload: IExpense[]
}

interface IAddExpenses {
  type: EActionTypes.ADD_EXPENSE,
  payload: IExpense
}

interface IAddNotification {
  type: EActionTypes.ADD_NOTIFICATION,
  payload: {
    id: string,
    message: string
  }
}

interface IDismissNotification {
  type: EActionTypes.REMOVE_NOTIFICATION,
  payload: string
}

interface IApiCallStart {
  type: EActionTypes.API_CALL_START,
  payload: { name: string }
}

interface IApiCallFinishSuccess {
  type: EActionTypes.API_CALL_FINISH_SUCCESS,
  payload: { name: string }
}

interface IApiCallFinishFail {
  type: EActionTypes.API_CALL_FINISH_FAIL,
  payload: { name: string, error: any }
}

interface IUpdateFilter {
  type: EActionTypes.UPDATE_FILTER,
  payload: any
}





export type TAction =
  | ISetExpenses
  | IAddExpenses
  | IAddNotification
  | IDismissNotification
  | IApiCallStart
  | IApiCallFinishSuccess
  | IApiCallFinishFail
  | IUpdateFilter