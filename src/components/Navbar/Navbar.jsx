import React from 'react'
import styles from './Navbar.module.css'
import NavElement from '../UI/NavElement/NavElement'


function Navbar() {
    return <>
    <nav className='flex justify-between align-baseline items-center w-screen h-[50px] shadow bg-gray-100 px-4'>
        <div className="logo">
            Logo
        </div>
        <ul className='flex space-x-4'>
            <NavElement path='root'>الصفحة الرئيسية</NavElement>
            <NavElement path='root'> عن الدكتور</NavElement>
            <NavElement path='root'>الخدمات</NavElement>
            <NavElement path='root'>تواصل معانا</NavElement>
            <NavElement path='root' className={`bg-amber-700 text-white`}>حجز استشارة</NavElement>
        </ul>
    </nav>
    </>
}

export default Navbar
