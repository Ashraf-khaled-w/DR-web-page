import React, { useEffect } from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';


function Layout({ children }) {

    useEffect(() => {
        const toTop = document.querySelector(".to-top")
        const handleScroll = () => {
          if (window.pageYOffset > 20) {
            toTop?.classList.add("opacity-100", "visible")
            toTop?.classList.remove("opacity-0", "invisible")
          } else {
            toTop?.classList.add("opacity-0", "invisible")
            toTop?.classList.remove("opacity-100", "visible")
        }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={`${styles.mainContent} min-h-[100vh]`}>
                <Outlet></Outlet>
            </main>
            <Footer />

            
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="to-top fixed bottom-10 right-10 bg-gray-500 text-white rounded-full px-4 py-3 text-2xl z-50 opacity-0 invisible hover:cursor-pointer transition-all duration-300">
            <i className="fas fa-chevron-up"></i>
        </button>
        </div>
        
    );
}

export default Layout
