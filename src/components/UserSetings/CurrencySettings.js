import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableCurrencies, apiCallsNames as api } from '../../config/config'

import { changeCurrency } from '../../store/actions/user'
import { selectSingleApiCall } from '../../store/selectors/ui'

const CurrencySettings = ({ userCurrency }) => {
  const [currency, setCurrency] = useState()
  const dispatch = useDispatch()
  const saveCurrencyApiState = useSelector(state => selectSingleApiCall(api.saveCurrency)(state))

  const changeCurrencyHandler = () => {
    if (!currency) { return }
    dispatch(changeCurrency(currency, api.saveCurrency))
  }
  
  return (
    <div>
      <label htmlFor="currency">Choose currency:</label>
      <select name="currency" id="currency" value={currency} onChange={e => setCurrency(e.target.value)} >
        <option value="">Choose currency</option>
        {availableCurrencies.map(item => (
          <option key={item} value={item} >{item}</option>
        ))}
      </select>
      <button disabled={userCurrency === currency || !currency || saveCurrencyApiState.loading} onClick={changeCurrencyHandler}>Save</button>
      {saveCurrencyApiState.loading && <p>Saving</p>}
    </div>
  )
}

export default CurrencySettings
