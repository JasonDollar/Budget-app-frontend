import React, { useState } from 'react'
import { availableCurrencies } from '../../config/config'

const CurrencySettings = ({ userCurrency }) => {
  const [currency, setCurrency] = useState()
  // console.log(userCurrency, currency)
  return (
    <div>
      <label htmlFor="currency">Choose currency:</label>
      <select name="currency" id="currency" value={currency} onChange={e => setCurrency(e.target.value)} defaultValue={userCurrency}>
        {/* <option value="">Choose currency</option> */}
        {availableCurrencies.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencySettings
