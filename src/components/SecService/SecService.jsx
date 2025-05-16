import React from 'react'
import styles from './SecService.module.css'


function SecService() {
    return <>
    <h2>نبذة عن خدماتنا</h2>
    <div className="service">
        <div className="service-item">
            <h3>استشارة طبية</h3>
            <p>احجز استشارة طبية مع دكتور محمد السيد عبد العال.</p>
        </div>
        <div className="service-item">
            <h3>فحص شامل</h3>
            <p>احجز فحص شامل لجهازك الهضمي.</p>
        </div>
        <div className="service-item">
            <h3>تحليل دم</h3>
            <p>احجز تحليل دم شامل.</p>
        </div>
    </div>
    </>
}

export default SecService
