import React, { useState } from 'react'
import styles from './Contact.module.css'
import whatsapp from '../../assets/whatsapp.png'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loader from '../../components/UI/Loader/Loader'
import Form from '../../components/Form/Form'



function Contact() {

    const [ activeTab, setActiveTab ] = useState('clinic1')
    const [ isLoading, setIsLoading ] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


     const handleSendRegister=async(formsData)=>{
        setIsSubmitted(true)
        setIsLoading(true)
        try{
            const response= await axios.post('https://doctoregister-69a992wdj-hadeerabdelgawads-projects.vercel.app/', formsData)
            console.log(response.data);
            if(response.data.success){
                toast.success('تم ارسال الطلب بنجاح')
                formik.resetForm()
            }
        }catch(error){
            console.error('Error sending email:', error);
            toast.error('حدث خطأ أثناء إرسال الطلب')
        }finally{
            setIsLoading(false)
        }
    }
    
    const validationSchema = yup.object({
        userName: yup.string().required('الاسم مطلوب').min(2, 'الاسم قصير جدا').max(50, 'الاسم طويل جدا'),
        email: yup.string().email('البريد الالكتروني غير صحيح').required('البريد الالكتروني مطلوب'),
        services: yup.string().required('الخدمة مطلوبة'),
        phoneNumber: yup.string().required('رقم الهاتف مطلوب').matches(/^01[1205][0-9]{8}$/, 'رقم الهاتف غير صحيح')
    })

    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            services:'',
            phoneNumber:'',
            clinicName: activeTab === 'clinic1' ? 'عيادة 1' : activeTab === 'clinic2' ? 'عيادة 2' :
            activeTab === 'clinic3' ? 'عيادة 3' : 'عيادة 4'
        },
        validationSchema: validationSchema,
        onSubmit: handleSendRegister
    })

   

    if(isSubmitted){
        if(isLoading){
            return <div className='flex items-center justify-center h-screen'>
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#309898]">
                    <Loader/>
                </div>
            </div>

        }
    }
    return <>

        <div className='max-w-5xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100'>

            <nav className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 p-5 mx-auto w-full rounded-lg shadow-lg text-right mb-8'>
                    <button onClick={()=>setActiveTab('clinic1')}
                        className={`px-1 border-b-2 font-medium text-sm 
                        ${activeTab=== 'clinic1'?'border-[#309898] text-[#309898]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            Clinic 1
                    </button>
                    <button onClick={()=>setActiveTab('clinic2')}
                        className={`px-1 border-b-2 font-medium text-sm 
                        ${activeTab=== 'clinic2'?'border-[#309898] text-[#309898]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            Clinic 2
                    </button>
                    <button onClick={()=>setActiveTab('clinic3')}
                        className={`px-1 border-b-2 font-medium text-sm 
                        ${activeTab=== 'clinic3'?'border-[#309898] text-[#309898]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            Clinic 3
                    </button>
                    <button onClick={()=>setActiveTab('clinic4')}
                        className={`px-1 border-b-2 font-medium text-sm 
                        ${activeTab=== 'clinic4'?'border-[#309898] text-[#309898]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            Clinic 4
                    </button>
            </nav>


            <h2 className='text-3xl font-extrabold text-[#309898] mb-8 text-center tracking-tight drop-shadow'>تواصل معنا</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 mx-auto w-full rounded-lg shadow-lg text-right mb-8'>
                {activeTab === 'clinic1' && (
                    <>
                    <div className='flex flex-col items-start justify-center text-right border-[#74d3d3] border-2 rounded-lg overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.5480698634624!2d30.990765974044983!3d30.815305581640047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c988d2c0e89f%3A0xf4738954ec395c81!2sIbn%20Sina%20specialized%20hospital!5e0!3m2!1sen!2seg!4v1749947605025!5m2!1sen!2seg" width={"100%"} height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='flex flex-col items-end justify-center text-right'>
                        <h1><span className='text-[#FA812F] text-2xl font-bold'>عنوان العياده </span><span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-location-dot"></i></span></h1>
                        <div className='me-5 text-gray-700 text-lg mt-4'>
                            <p>الغربيه _ طنطا , شارع الاستاد امام مستشفى ابن سينا</p>
                            <p>عماره 10 - الدور الخامس</p>
                            <div className='py-5'>
                                <h2 className=' text-xl font-medium text-[#309898] mb-2'>للاستفسار و الحجز</h2>
                                <div className='pe-4'>
                                    <p>
                                        <a href="https://wa.me/+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <img src={whatsapp} alt="whatsapp" width={'25px'}  className='inline'/></a>
                                    </p>
                                    <p>
                                        <a href="whatsapp://call?number=+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-phone"></i></span></a>
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </>
                )}

                {activeTab === 'clinic2' && (
                    <>
                    <div className='flex flex-col items-start justify-center text-right border-[#74d3d3] border-2 rounded-lg overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.5480698634624!2d30.990765974044983!3d30.815305581640047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c988d2c0e89f%3A0xf4738954ec395c81!2sIbn%20Sina%20specialized%20hospital!5e0!3m2!1sen!2seg!4v1749947605025!5m2!1sen!2seg" width={"100%"} height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='flex flex-col items-end justify-center text-right'>
                        <h1><span className='text-[#FA812F] text-2xl font-bold'>عنوان العياده </span><span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-location-dot"></i></span></h1>
                        <div className='me-5 text-gray-700 text-lg mt-4'>
                            <p>الغربيه _ طنطا , شارع الاستاد امام مستشفى ابن سينا</p>
                            <p>عماره 11 - الدور الخامس</p>
                            <div className='py-5'>
                                <h2 className=' text-xl font-medium text-[#309898] mb-2'>للاستفسار و الحجز</h2>
                                <div className='pe-4'>
                                    <p>
                                        <a href="https://wa.me/+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <img src={whatsapp} alt="whatsapp" width={'25px'}  className='inline'/></a>
                                    </p>
                                    <p>
                                        <a href="whatsapp://call?number=+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-phone"></i></span></a>
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </>
                )}

                {activeTab === 'clinic3' && (
                    <>
                    <div className='flex flex-col items-start justify-center text-right border-[#74d3d3] border-2 rounded-lg overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.5480698634624!2d30.990765974044983!3d30.815305581640047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c988d2c0e89f%3A0xf4738954ec395c81!2sIbn%20Sina%20specialized%20hospital!5e0!3m2!1sen!2seg!4v1749947605025!5m2!1sen!2seg" width={"100%"} height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='flex flex-col items-end justify-center text-right'>
                        <h1><span className='text-[#FA812F] text-2xl font-bold'>عنوان العياده </span><span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-location-dot"></i></span></h1>
                        <div className='me-5 text-gray-700 text-lg mt-4'>
                            <p>الغربيه _ طنطا , شارع الاستاد امام مستشفى ابن سينا</p>
                            <p>عماره 12 - الدور الخامس</p>
                            <div className='py-5'>
                                <h2 className=' text-xl font-medium text-[#309898] mb-2'>للاستفسار و الحجز</h2>
                                <div className='pe-4'>
                                    <p>
                                        <a href="https://wa.me/+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <img src={whatsapp} alt="whatsapp" width={'25px'}  className='inline'/></a>
                                    </p>
                                    <p>
                                        <a href="whatsapp://call?number=+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-phone"></i></span></a>
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </>
                )}

                {activeTab === 'clinic4' && (
                    <>
                    <div className='flex flex-col items-start justify-center text-right border-[#74d3d3] border-2 rounded-lg overflow-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.5480698634624!2d30.990765974044983!3d30.815305581640047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c988d2c0e89f%3A0xf4738954ec395c81!2sIbn%20Sina%20specialized%20hospital!5e0!3m2!1sen!2seg!4v1749947605025!5m2!1sen!2seg" width={"100%"} height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='flex flex-col items-end justify-center text-right'>
                        <h1><span className='text-[#FA812F] text-2xl font-bold'>عنوان العياده </span><span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-location-dot"></i></span></h1>
                        <div className='me-5 text-gray-700 text-lg mt-4'>
                            <p>الغربيه _ طنطا , شارع الاستاد امام مستشفى ابن سينا</p>
                            <p>عماره 13 - الدور الخامس</p>
                            <div className='py-5'>
                                <h2 className=' text-xl font-medium text-[#309898] mb-2'>للاستفسار و الحجز</h2>
                                <div className='pe-4'>
                                    <p>
                                        <a href="https://wa.me/+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <img src={whatsapp} alt="whatsapp" width={'25px'}  className='inline'/></a>
                                    </p>
                                    <p>
                                        <a href="whatsapp://call?number=+201555210157" target='_blank' className='hover:text-gray-400 transfrom transition duration-300'>+20 155 521 0157 <span className='text-[#309898] text-xl font-bold'><i class="fa-solid fa-phone"></i></span></a>
                                    </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </>
                )}
                


            

        </div>
            <div className="bg-[#f8fafb] rounded-2xl shadow-lg border border-[#309898]/20 p-8 mt-8 mx-auto">
                <h2 className="text-2xl font-bold text-[#FA812F] mb-2 flex items-center justify-end gap-2 ">
                    الحجز عن بعد
                    <i className="fa-regular fa-calendar-check text-[#309898]"></i>
                </h2>
                <p className="text-gray-700 mb-4 text-right">وفر لنا الخدمة التى تريدها وسيتم التواصل معك لتأكيد المعاد</p>
                <Form 
                    onSubmit={formik.handleSubmit}
                    values={formik.values}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    errors={formik.errors}
                    touched={formik.touched}/>
                </div>
        </div>
        
    
    </>
}

export default Contact
