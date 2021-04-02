import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../../store/actions/user'
import { selectSingleApiCall } from '../../store/selectors/ui'
import { aapiCallsNames as api } from '../../config/config'

const CategoriesSettings = ({ categories }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => selectSingleApiCall(api.removeCategory)(state))
  // console.log(error)
  return (
    <div>
      Your categories:
      <ul>
        {categories?.map(item => (
          <li key={item}>{item} <button onClick={() => dispatch(removeCategory(item, api.removeCategory))} disabled={loading}>X</button> </li>
        ))}
      </ul>
      { loading && <span>Removing</span> }
    </div>
  )
}

export default CategoriesSettings
