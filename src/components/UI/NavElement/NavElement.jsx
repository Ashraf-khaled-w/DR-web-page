import React from 'react'
import styles from './NavElement.module.css'
import { NavLink } from 'react-router-dom'




function NavElement({ children , className ,path='', ...rest }) {
    return <>
    <li className={`border p-1 rounded-md hover:bg-gray-200 ${className}`} {...rest}>
        <NavLink to={path}>{children}</NavLink>
    </li>
    </>
}

export default NavElement
