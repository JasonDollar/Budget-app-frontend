import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../../store/actions/user'
import { selectSingleApiCall } from '../../store/selectors/ui'
import { apiCallsNames as api } from '../../config/config'
import styled from 'styled-components'
import ErrorMessage from '../ErrorMessage'
import List from '../styles/List'

const ListElement = styled.li`
  &::first-letter {
    text-transform: uppercase;
  }
`

const CategoriesSettings = ({ categories }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => selectSingleApiCall(api.removeCategory)(state))

  return (
    <div>
      Your categories:
      <List>
        {categories?.map(item => (
          <ListElement key={item}>{item} <button onClick={() => dispatch(removeCategory(item, api.removeCategory))} disabled={loading}>X</button> </ListElement>
        ))}
      </List>
      { loading && <span>Removing</span> }
      {error && <ErrorMessage error={error} />}
    </div>
  )
}

export default CategoriesSettings
