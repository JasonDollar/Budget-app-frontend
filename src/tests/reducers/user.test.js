import userReducer from '../../store/reducers/user'

import { userData } from '../fixtures/user'

import * as userActions from '../../store/actions/user'

const initialState = {
  userData: {
    settings: {
      currency: 'USD',
      locale: 'en-US'
    }
  }
}


test('should set default state', () => {
  const state = userReducer(undefined, { type: '@@INIT' })
  // we start app with some dummy expenses - expect test to fail after we remove dummy expenses
  expect(state).toEqual(initialState)
})

test('should set a user to store', () => {
  const state = userReducer(initialState, userActions.setUserToStore(userData))

  expect(state).toEqual({ userData })
})

test('should clear state', () => {
  const state = userReducer(initialState, userActions.clearUser())

  expect(state).toEqual(initialState)
})

