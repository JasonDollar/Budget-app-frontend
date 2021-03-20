import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectUserData = createSelector(
  [selectUser],
  state => state.userData
)

export const selectUserSettings = createSelector(
  [selectUserData],
  state => state.settings
)

export const selectUserCategories = createSelector(
  [selectUserData],
  state => state.categories
)