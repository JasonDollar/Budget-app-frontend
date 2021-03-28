import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../../store/actions/user'
import { selectSingleApiCall } from '../../store/selectors/ui'

const CategoriesSettings = ({ categories }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => selectSingleApiCall('remove-category')(state))
  console.log(error)
  return (
    <div>
      Your categories:
      <ul>
        {categories?.map(item => (
          <li key={item}>{item} <button onClick={() => dispatch(removeCategory(item, 'remove-category'))} disabled={loading}>X</button> </li>
        ))}
      </ul>
      { loading && <span>Removing</span> }
    </div>
  )
}

export default CategoriesSettings
