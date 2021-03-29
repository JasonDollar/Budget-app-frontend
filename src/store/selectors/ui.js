import { createSelector } from 'reselect'

const selectUi = state => state.ui

const selectApiCalls = createSelector(
  [selectUi],
  state => state.apiCalls
)

export const selectSingleApiCall = eventName => createSelector(
  [selectApiCalls],
  apiCalls => apiCalls.find(item => item.name === eventName)
)

export const selectFilters = createSelector(
  [selectUi],
  state => state.filter
)

