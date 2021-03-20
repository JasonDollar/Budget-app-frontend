import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableCurrencies } from '../../config/config'

import { changeCurrency } from '../../store/actions/user'

const CurrencySettings = ({ userCurrency }) => {
  const [currency, setCurrency] = useState()
  const dispatch = useDispatch()
  const saveCurrencyApiState = useSelector(state => state.ui.apiCalls.find(item => item.name === 'save-currency'))

  const changeCurrencyHandler = () => {
    if (!currency) { return }
    dispatch(changeCurrency(currency, 'save-currency'))
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
