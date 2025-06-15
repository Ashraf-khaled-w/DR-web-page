import React from 'react'
import styles from './Navbar.module.css'
import NavElement from '../UI/NavElement/NavElement'


function Navbar() {
    return <>
    <nav className='flex flex-col lg:flex-row md:flex-row justify-between align-baseline items-center gap-5 w-[vw] py-5 shadow bg-gray-200 border-b-2 border-[#FA812F] rounded-b-2xl overflow-hidden px-4'>
        <div className="logo">
            Dr/ Mohamed El-Sayed Abdel-Aal
        </div>
        <ul className='flex flex-col lg:flex-row md:flex-row items-center space-x-4 space-y-4 lg:space-y-0 lg:space-x-0 md:space-x-0' dir='rtl'>
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
