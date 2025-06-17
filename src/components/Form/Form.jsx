import React from 'react'
import styles from './Form.module.css'


function Form({ values ={}, handleChange, handleBlur, onSubmit, errors, touched }) {
    return <>
    
        <form onSubmit={onSubmit} className="space-y-4">
                    <input
                    type="text"
                    name="userName"
                    placeholder="الاسم"
                    className="w-full p-3 border border-[#309898]/30 rounded-lg focus:border-[#309898] focus:ring-2 focus:ring-[#309898]/20 transition text-right"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.userName && errors.userName && (
                    <div className="text-red-500 text-sm">{errors.userName}</div>
                    )}
                    <input
                    type="email"
                    name='email'
                    placeholder="البريد الالكتروني"
                    className="w-full p-3 border border-[#309898]/30 rounded-lg focus:border-[#309898] focus:ring-2 focus:ring-[#309898]/20 transition text-right"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                    <input
                    type="text"
                    name='phoneNumber'
                    placeholder="رقم الهاتف"
                    className="w-full p-3 border border-[#309898]/30 rounded-lg focus:border-[#309898] focus:ring-2 focus:ring-[#309898]/20 transition text-right"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                    <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
                    )}
                    <select
                    name="services"
                    id="service"
                    defaultValue=""
                    className="w-full p-3 border border-[#309898]/30 rounded-lg text-right bg-white focus:border-[#309898] focus:ring-2 focus:ring-[#309898]/20 transition"
                    value={values.services}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                    <option value="" disabled hidden>
                        اختر نوع الخدمة
                    </option>
                    <option value="liver">استشارات أمراض الكبد</option>
                    <option value="diabetics">متابعة مرضى السكر</option>
                    <option value="digestive_system">فحوصات الجهاز الهضمي</option>
                    <option value="ayalsis">تحاليل طبية شاملة</option>
                    <option value="blood_pressure">ضغط الدم وأمراض الباطنة</option>
                    <option value="nutritional">استشارات غذائية</option>
                    <option value="medical_scopes">مناظير</option>
                    <option value="vaccinations">تطعيمات</option>
                    </select>
                    {touched.services && errors.services && (
                    <div className="text-red-500 text-sm">{errors.services}</div>
                    )}
                    <button
                    type="submit"
                    className="w-full bg-[#309898] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#FA812F] hover:cursor-pointer transition duration-300 text-lg"
                    >
                    ارسال
                    </button>
                </form>
    </>
}

export default Form
