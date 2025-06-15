import React from 'react'
import styles from './Service.module.css'
import liver from '../../assets/Liver-diseases.png'
import Diabetics from '../../assets/Diabetics.png'
import digestive_system from '../../assets/digestive-system.png'
import ayalsis from '../../assets/ayalsis.png'
import bloodPressure from '../../assets/bloodPressure.png'
import nutritional from '../../assets/nutritional.png'
import MedicalScopes from '../../assets/MedicalScopes.png'
import Vaccinations from '../../assets/Vaccinations.png'


function Service() {
    return <>

        <div className='py-5'>
            <h1 className='text-3xl font-extrabold text-[#309898] mb-8 text-center tracking-tight drop-shadow'>خدماتنا</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-5 mx-auto'>
            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={liver} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'> استشارات أمراض الكبد</h3>
                <p className='text-gray-700 text-center'>
                    .تشخيص وعلاج أمراض الكبد المزمنة والحادة
                </p>

            </div>

            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={Diabetics} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'> متابعة مرضى السكر</h3>
                <p className='text-gray-700 text-center'>
                   .متابعة دورية وخطط علاجية مخصصة لمرضى السكري

                </p>

            </div>

            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={digestive_system} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'>فحوصات الجهاز الهضمي</h3>
                <p className='text-gray-700 text-center'>
                    .تشخيص وعلاج مشاكل المعدة، القولون، والارتجاع
                </p>

            </div>

            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={ayalsis} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'>تحاليل طبية شاملة</h3>
                <p className='text-gray-700 text-center'>
                   .إجراء تحاليل دم ووظائف كبد وسكر شاملة
                </p>

            </div>

            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={bloodPressure} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'> متابعة ضغط الدم وأمراض الباطنة</h3>
                <p className='text-gray-700 text-center'>
                    .علاج ومتابعة أمراض الضغط وأمراض الباطنة العامة
                </p>

            </div>

            <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                    <span className='text-white text-2xl p-2'><img src={nutritional} alt="Liver diseases" /></span>
                </div>
                <h3 className='text-xl font-bold text-[#309898] mb-2'> تقديم برامج غذائية علاجية</h3>
                <p className='text-gray-700 text-center'>
                    .نصائح وبرامج غذائية لمرضى الكبد والسكر والجهاز الهضمي
                </p>

            </div>

            {/* Last row: Centered horizontally and vertically */}
            <div className="lg:col-span-3 flex flex-col lg:flex-row justify-center items-center gap-8">
              <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                  <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                      <span className='text-white text-2xl p-2'><img src={MedicalScopes} alt="Liver diseases" /></span>
                  </div>
                  <h3 className='text-xl font-bold text-[#309898] mb-2'> مناظير الجهاز الهضمي</h3>
                  <p className='text-gray-700 text-center'>
                      .إجراء مناظير تشخيصية وعلاجية للمعدة والقولون
                  </p>
              </div>

              <div className='flex flex-col items-center bg-[#309898]/10 rounded-xl p-6 shadow hover:shadow-lg transition-shadow border border-[#309898]/20'>
                  <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#309898] mb-4'>
                      <span className='text-white text-2xl p-2'><img src={Vaccinations} alt="Liver diseases" /></span>
                  </div>
                  <h3 className='text-xl font-bold text-[#309898] mb-2'> تطعيمات الكبد والوقاية</h3>
                  <p className='text-gray-700 text-center'>
                      .تقديم التطعيمات اللازمة للوقاية من أمراض الكبد
                  </p>
              </div>
            </div>
        </div>
    </div>
        
    
    </>
}

export default Service
