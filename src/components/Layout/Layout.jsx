import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout
