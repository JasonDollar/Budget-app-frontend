// import { useState } from 'react'
import { useSelector } from "react-redux"
import { selectUserData } from '../store/selectors/user'

export const useIsUserLogged = () => {
  const user = useSelector(selectUserData)

  return !!user?.email
}