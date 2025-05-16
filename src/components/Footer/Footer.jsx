import React from 'react'
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={` bg-gray-800 text-white text-center p-4`}>
            <p>&copy; {new Date().getFullYear()} Ashraf Khaled Sulaiman. All rights reserved.</p>
        </footer>
    );
}

export default Footer
