import React from 'react'
import styles from './About.module.css'


function About() {
    return <>
        <div className='max-w-5xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 text-right'>
            <h1 className='text-3xl font-medium text-[#FA812F]'>من هو د. محمد السيد عبد العال؟</h1>
            <p className='text-xl text-gray-700 my-2'>  تعرف على السيرة الذاتية والخبرة المهنية للدكتور لتشعر بالثقة والاطمئنان</p>

            <div className='space-y-6'>
                <div>
                    <h2 className='text-xl font-bold text-[#309898]'>
                        :البيانات الشخصية  &nbsp;
                        <i class="fa-regular fa-address-card"></i>
                    </h2>
                    <ul className='text-gray-700 text-lg list-unstyled space-y-2 text-right pe-4'>
                        <li>الاسم: د. محمد السيد عبد العال</li>
                        <li>تاريخ الميلاد: 1 يناير 1980</li>
                        <li>الجنسية: مصري</li>
                        <li><span className='text-blue-500 hover:underline hover:cursor-pointer transition duration-300 ease'>mohamed@gmail.com</span>  : البريد الإلكتروني</li>

                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-[#309898]'>
                        :المؤهلات العلمية &nbsp;
                        <i class="fa-solid fa-graduation-cap"></i>
                    </h2>
                    <ul className='text-gray-700 text-lg list-unstyled space-y-2 text-right pe-4'>
                        <li>بكالوريوس الطب والجراحة - جامعة القاهرة 2003</li>
                        <li>ماجستير في الأمراض الباطنية - جامعة عين شمس 2007</li>
                        <li>دكتوراه في أمراض الكبد والجهاز الهضمي - جامعة الإسكندرية 2012</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-[#309898]'>
                        :الخبرات العملية &nbsp;
                        <i class="fa-solid fa-briefcase"></i>
                    </h2>
                    <ul className='text-gray-700 text-lg list-unstyled space-y-2 text-right pe-4'>
                        <li>طبيب باطني في مستشفى القاهرة الجامعي (2003-2007)</li>
                        <li>استشاري أمراض الكبد في مستشفى عين شمس التخصصي (2007-2012)</li>
                        <li>أستاذ مساعد في قسم الأمراض الباطنية - جامعة الإسكندرية (2012-الآن)</li>
                    </ul>
                </div>
               <div>
                    <h2 className="text-xl font-bold text-[#309898]">
                         الإنجازات الطبية &nbsp;
                        <i className="fa-solid fa-stethoscope"></i>
                    </h2>
                    <ul className="text-gray-700 leading-loose pe-4">
                        <li>عدد العمليات: أكثر من 500 عملية مناظير ناجحة</li>
                        <li>نسبة النجاح: 98%</li>
                    </ul>
                </div>
            </div>
            
        </div>

    
    </>
}

export default About
