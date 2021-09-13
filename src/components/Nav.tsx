import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavList, Backdrop } from './styles/Nav'

interface Props {
  isOpen: boolean
  toggleNavOpen: () => void
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Nav: React.FC<Props> = ({ isOpen, toggleNavOpen, handleLinkClick }) => {
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={toggleNavOpen}/>
      <NavList className={isOpen ? 'open' : ''} >
        <li className="onlyMobile">
          <button onClick={toggleNavOpen} className="closeMenu">Close</button>
        </li>
        <li>
          <NavLink to="/" onClick={handleLinkClick}>Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/user" onClick={handleLinkClick}>User</NavLink>
        </li>
        {/* <li>
          <NavLink to="/">Menu item 2</NavLink>
        </li>
        <li>
          <NavLink to="/">Menu item 3</NavLink>
        </li>
        <li>
          <NavLink to="/">Menu item 4</NavLink>
        </li>
        <li>
          <NavLink to="/">Menu item 5</NavLink>
        </li> */}
      </NavList>
    </>
  )
}

export default Nav
