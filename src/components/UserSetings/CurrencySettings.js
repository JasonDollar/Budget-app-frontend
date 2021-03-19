import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { availableCurrencies } from '../../config/config'

import { changeCurrency } from '../../store/actions/user'

const CurrencySettings = ({ userCurrency }) => {
  const [currency, setCurrency] = useState(userCurrency)
  const dispatch = useDispatch()
  // console.log(userCurrency, currency)
  return (
    <div>
      <label htmlFor="currency">Choose currency:</label>
      <select name="currency" id="currency" value={currency} onChange={e => setCurrency(e.target.value)} >
        {/* <option value="">Choose currency</option> */}
        {availableCurrencies.map(item => (
          <option key={item} value={item} selected={userCurrency === currency}>{item}</option>
        ))}
      </select>
      <button disabled={userCurrency === currency} onClick={() => dispatch(changeCurrency(currency))}>Save</button>
    </div>
  )
}

export default CurrencySettings
