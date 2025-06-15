import React from 'react'
import styles from './Blog.module.css'
import { Helmet } from 'react-helmet'

const freqQuestion = [
    {
    question: 'ما هي أعراض أمراض الكبد المزمنة؟',
    answer: 'تشمل الأعراض: الإرهاق المستمر، اصفرار الجلد والعينين، فقدان الشهية، تورم البطن أو الساقين. يجب مراجعة الطبيب عند ظهور هذه الأعراض'
  },
  {
    question: 'كيف أقي نفسي من مضاعفات مرض السكر؟',
    answer: 'المتابعة الدورية، الالتزام بالأدوية، اتباع نظام غذائي صحي، ممارسة الرياضة، وفحص السكر بانتظام'
  },
  {
    question: 'متى يجب زيارة الطبيب عند الشعور بآلام البطن؟',
    answer: 'إذا كان الألم شديدًا أو متكررًا أو مصحوبًا بقيء أو ارتفاع حرارة أو اصفرار الجلد، يجب زيارة الطبيب فورًا'
  },
  {
    question: 'ما هي النصائح الغذائية لمرضى الكبد؟',
    answer: 'تناول وجبات صغيرة متكررة، تقليل الدهون والملح، الإكثار من الخضروات والفواكه، وتجنب الكحوليات'
  },
  {
    question: 'كيف أتعامل مع ارتفاع ضغط الدم؟',
    answer: 'الالتزام بالأدوية، تقليل الملح، ممارسة الرياضة، الحفاظ على وزن صحي، والمتابعة مع الطبيب'
  }
]

function Blog() {
    return <>
    <div className='max-w-[80%] mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100'>
        <Helmet>
            <title>أسئلة طبية شائعة وإجاباتها | د. محمد السيد عبد العال</title>
            <meta name="description" content="تعرف على إجابات أهم الأسئلة الطبية الشائعة حول أمراض الكبد، الجهاز الهضمي، السكر، الضغط، والتغذية مع د. محمد السيد عبد العال." />
        </Helmet>
        <h1 className="text-3xl font-extrabold text-[#309898] mb-8 text-center">الأسئلة الطبية الشائعة</h1>
        <p className="text-gray-700 text-center mb-10">هنا تجد إجابات لأكثر الأسئلة التي تهم المرضى في مجال الكبد والجهاز الهضمي والباطنة.</p>

        <div className='space-y-6 text-right'>
            {freqQuestion.map((item, index)=>(
                <div key={index} className='bg-white rounded-xl shadow border border-[#309898]/20 p-6 text-right flex flex-row-reverse items-end gap-4'>
                    <div className='text-[#309898] font-bold text-lg text-right'>.{index + 1}</div>
                    <div>
                        <h2 className='text-lg font-medium text-[#309898] mb-2'>{item.question}</h2>
                        <p>{item.answer}</p>
                    </div>
                </div>
                
            )
            )}
        </div>
    </div>
    
    </>
}

export default Blog
