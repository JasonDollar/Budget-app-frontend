import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCategory } from '../../store/actions/user'

const CategoriesSettings = ({ categories }) => {
  const dispatch = useDispatch()
  return (
    <div>
      Your categories:
      <ul>
        {categories?.map(item => (
          <li key={item}>{item} <button onClick={() => dispatch(removeCategory(item))}>X</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesSettings
