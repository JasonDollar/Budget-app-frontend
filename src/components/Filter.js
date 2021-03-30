import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectFilters } from '../store/selectors/ui'
import { updateFilter } from '../store/actions/ui'

const Filter = () => {
  const { search, dateRangeStart, dateRangeEnd, sortBy, sortDirection } = useSelector(selectFilters)
  const dispatch = useDispatch()

  const handleChange = update => {
    dispatch(updateFilter(update))
  }

  return (
    <div className="margin-r-l">
      Search: <input type="text" value={search} onChange={e => handleChange({search: e.target.value})}/>

      <select value={sortBy} onChange={(e) => handleChange({ sortBy: e.target.value })}>
        <option value="DATE">Date</option>
        <option value="AMOUNT">Amount</option>
      </select>

      <button onClick={() => handleChange({sortDirection: sortDirection === 'ASC' ? 'DESC' : 'ASC'})}>{sortDirection === 'ASC' ? 'DESC' : 'ASC'}</button>
    </div>
  )
}

export default Filter
