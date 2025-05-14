import React from 'react'
import styles from './Navbar.module.css'


function Navbar() {
    return <>
    <nav className='flex justify-between align-baseline items-center w-screen h-[50px] shadow bg-gray-100 px-4'>
        <div className="logo">
            Logo
        </div>
        <ul className='flex space-x-4'>
            <li>الصفحة الرئيسية</li>
            <li>عن الدكتور</li>
            <li>الخدمات الطبية</li>
            <li>آراء المرضى</li>
            <li>تواصل معانا</li>
            <li>حجز استشارة</li>
        </ul>
    </nav>
    </>
}

export default Navbar
