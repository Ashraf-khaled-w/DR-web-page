import React from 'react'
import styles from './NavElement.module.css'
import { NavLink } from 'react-router-dom'

function NavElement({ path, children, className = '' }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-full transition-all duration-200 font-bold
          ${isActive ? 'bg-[#FA812F] text-white shadow' : 'text-[#309898] hover:bg-[#309898]/10'} ${className}`
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavElement
