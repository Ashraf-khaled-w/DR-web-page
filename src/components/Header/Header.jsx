import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import docImg from '../../assets/doctorImg.png'
import wallpaper from '../../assets/wallpaper.jpg'
import { NavLink } from 'react-router-dom';

function Header() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // لتشغيل التأثير مرة واحدة فقط
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  
    return (
      <>
        <header  style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${wallpaper})`,
              backdropFilter: 'blur(8px)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
  className="w-full bg-gradient-to-l from-[#FA812F] to-[#309898] py-8 px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 shadow-lg overflow-hidden">
          <div className="flex flex-col justify-center items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold italic text-white drop-shadow py-2 mb-2">
              د/ محمد السيد عبد العال
            </h1>
            <p className="text-xl text-gray-100 py-1">أخصائى الكبد و الجهاز الهضمى</p>
            <p className="text-xl text-gray-100 py-1">وأمراض الباطنة و السكر</p>
            <p className="text-lg text-gray-200 py-1 mb-2">مستشفى المجمع الطبى تأمين صحى طنطا</p>
            <div className="py-2 flex flex-col items-center gap-2">
              <span className="text-[#FA812F] text-2xl px-2 italic">تواصل معانا</span>
              <NavLink to={'/contact'}>
                <button className="flex items-center gap-2 bg-[#309898] hover:bg-[#FA812F] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-xl">
                  <i className="fa-solid fa-phone-volume fa-shake"></i>
                  احجز استشارتك الآن
                </button>
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center flex-1">
            <div className="rounded-full p-2 bg-white shadow-lg border-4 border-[#FA812F] hover:border-[#309898] transition-all duration-300">
              <img
                src={docImg}
                alt="doctorImage"
                className="rounded-full w-56 h-56 object-cover shadow-xl"
              />
            </div>
          </div>
        </header>

     
      </>
    );
}

export default Header





//#FA812F orange
//309898
