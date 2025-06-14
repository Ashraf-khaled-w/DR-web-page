import React from 'react'
import styles from './SecService.module.css'


function SecService() {
    return (
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-5xl mx-auto my-12 p-8">
            <h2 className="text-3xl font-extrabold text-[#FA812F] mb-8 text-center tracking-tight drop-shadow">
                نبذة عن خدماتنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4">
                        <span className="text-white text-2xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#309898] mb-2">استشارة طبية</h3>
                    <p className="text-gray-700 text-center">
                        احصل على استشارة متخصصة لحالتك الصحية والإجابة على جميع استفساراتك الطبية بدقة واهتمام.
                    </p>
                </div>
                <div className="flex flex-col items-center bg-[#FA812F]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#FA812F]/20">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FA812F] mb-4">
                        <span className="text-white text-2xl">🩺</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#FA812F] mb-2">فحص شامل</h3>
                    <p className="text-gray-700 text-center">
                        إجراء فحوصات شاملة للجهاز الهضمي والكبد للاطمئنان على صحتك والكشف المبكر عن أي مشكلات.
                    </p>
                </div>
                <div className="flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4">
                        <span className="text-white text-2xl">🧪</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#309898] mb-2">تحليل دم</h3>
                    <p className="text-gray-700 text-center">
                        إجراء تحاليل دم دقيقة لمتابعة حالتك الصحية وتشخيص الأمراض بدقة وفعالية.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SecService
