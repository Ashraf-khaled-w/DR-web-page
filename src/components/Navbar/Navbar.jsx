import React from 'react'
import styles from './Navbar.module.css'
import NavElement from '../UI/NavElement/NavElement'


function Navbar() {
    return <>
    <nav className='flex justify-between align-baseline items-center w-[vw] py-5 shadow bg-gray-200 border-b-2 border-[#FA812F] rounded-b-2xl overflow-hidden px-4'>
        <div className="logo">
            Dr/ Mohamed El-Sayed Abdel-Aal
        </div>
        <ul className='flex space-x-4' dir='rtl'>
            <NavElement path='/'>الصفحة الرئيسية</NavElement>
            <NavElement path='/about'> عن الدكتور</NavElement>
            <NavElement path='/service'>الخدمات</NavElement>
            <NavElement path='/contact'>تواصل معانا</NavElement>
            <NavElement path='root' className={`bg-[#309898] text-white px-2`}>حجز استشارة</NavElement>
        </ul>
    </nav>
    </>
}

export default Navbar
