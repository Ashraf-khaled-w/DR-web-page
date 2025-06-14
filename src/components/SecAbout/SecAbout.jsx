import React from "react";
import styles from "./SecAbout.module.css";
import aboutImg from '../../assets/about.jpg'

function SecAbout() {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto my-12">
        <div className="flex justify-center items-center relative">
          <img
            src={aboutImg}
            alt="Doctor"
            className="w-64 h-64 object-cover rounded-full border-4 border-[#309898] shadow-lg transition-transform duration-300 hover:scale-105 hover:ring-4 hover:ring-[#FA812F]"
          />
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-40 border-r-4 border-[#309898]"></div>
        </div>
        <div className="flex flex-col justify-center items-center text-center px-2">
          <h2 className="text-4xl font-extrabold text-[#FA812F] mb-4 tracking-tight drop-shadow">
            عن الدكتور
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            د/ محمد السيد عبد العال هو أخصائي في الكبد والجهاز الهضمي وأمراض الباطنة والسكر. يتمتع بخبرة واسعة في هذا المجال ويعمل في مستشفى المجمع الطبي بتأمين صحي طنطا.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            يهدف الدكتور محمد إلى تقديم أفضل رعاية صحية للمرضى من خلال استخدام أحدث التقنيات الطبية وتوفير بيئة مريحة وآمنة للشفاء.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#309898] text-white font-bold py-2 px-6 rounded-full shadow hover:bg-[#FA812F] transition-colors duration-300"
          >
            احجز موعدك الآن
          </a>
        </div>
        
      </div>
    </>
  );
}

export default SecAbout;
