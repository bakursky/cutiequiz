import { Page } from "@/models/page"
import { User } from "@/models/user"
import mongoose from "mongoose"
import Image from "next/image"
import Link from "next/link"

export default async function UserPage({params}){
    const uri = params.uri
    mongoose.connect(process.env.MONGODB_URI)
    const page = await Page.findOne({uri})
    const user = await User.findOne({email:page.owner})

    return(
        <div>

   <form className="flex flex-col items-center max-w-md mx-auto gap-7 py-5">

   <h1>🐶 Cutiequiz.com</h1>

       <Image
           className="rounded-full outline-dashed outline-offset-4 outline-4 outline-[#DA9966]"
           src={user.image}
           alt={"avatar"}
           width={150}
           height={150}
       />

      <div className=" text-center">
       <h1 className="font-bold text-3xl text-[#DA9966] ">Моя анкета</h1> 

       <Link
               href={'/'}
               className="text-[#4B74B5] font-bold"
           >

                   <span>🔗 {page.uri} </span>
               
           </Link>
  
       </div>


           <div className="w-full rounded-3xl p-5 bg-[#F8E7E8] drop-shadow-xl outline-4 outline-dashed outline-[#E9A5B0]" >
               <h1 className="text-3xl">😉 Основное</h1>

               <p className="pt-2 font-bold" >Как тебя зовут?</p>
               <textarea name="q1" placeholder={page.q1} className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0] bg-white" disabled />

               <p className="pt-2">Дата рождения</p>
               <textarea name="q2" placeholder={page.q2} className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl-full focus:border-[#E9A5B0] bg-white" disabled/>

               <p className="pt-2">Знак зодиака</p>
               <textarea name="q3" placeholder={page.q3} className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0] bg-white" disabled/>
     
               <p className="pt-2">Мои странички в Интернете</p>
               <textarea name="q4" placeholder={page.q4} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0] bg-white " disabled/>

           </div>

           <div className="w-full rounded-3xl p-5 bg-[#CFE4FF] drop-shadow-xl outline-4 outline-dashed outline-[#4A74AB]" >
               <h1 className="text-3xl">👑 Еще немного обо мне</h1>

               <p className="pt-2 font-bold" >Меня можно описать тремя словами</p>
               <textarea name="q5" placeholder={page.q5} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />

               <p className="pt-2">Я люблю носить</p>
               <textarea name="q6" placeholder={page.q6} className="block w-full min-h-[60px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />

               <p className="pt-2">🎤 Мое хобби это</p>
               <textarea name="q7" placeholder={page.q7} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />
     
               <p className="pt-2">😥 Мне грустно, когда</p>
               <textarea name="q8" placeholder={page.q8} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />
     
               <p className="pt-2">Если бы я могла иметь суперсилу, то это была бы...</p>
               <textarea name="q9" placeholder={page.q9} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />

               <p className="pt-2">🎁 Самый лучший подарок для меня это</p>
               <textarea name="q10" placeholder={page.q10} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />
     
               <p className="pt-2">Я ценю в людях</p>
               <textarea name="q11" placeholder={page.q11} className="block w-full min-h-[40px] h-[60px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />
     
               <p className="pt-2">💅🏿 Мои подруги  </p>
               <textarea name="q12" placeholder={page.q12} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white disabled " />

               <p className="pt-2">🔓 Мои секреты</p>
               <textarea name="q13" placeholder={page.q13} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] bg-white" disabled />

           </div>

           <div className="w-full rounded-3xl p-5 bg-[#EAF0E9] drop-shadow-xl outline-4 outline-dashed outline-[#C9D1B8]" >
               <h1 className="text-3xl">🐶 Мои интересы</h1>

               <p className="pt-2 font-bold" >В свободное время я люблю</p>
               <textarea name="q14" placeholder={page.q14} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />

               <p className="pt-2">Моя любимая музыка</p>
               <textarea name="q15" placeholder={page.q15} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white disabled " />

               <p className="pt-2">Мои любимые фильмы</p>
               <textarea name="q16" placeholder={page.q16} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />
     
               <p className="pt-2">Мои любимые книги</p>
               <textarea name="q17" placeholder={page.q17} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />

               <p className="pt-2">Моя любимая еда</p>
               <textarea name="q18" placeholder={page.q18} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />

               <p className="pt-2">Мой любимый праздник</p>
               <textarea name="q19" placeholder={page.q19} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />

               <p className="pt-2">Мое любимое животное</p>
               <textarea name="q20" placeholder={page.q20} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] bg-white" disabled />

           </div>

           <div className="w-full rounded-3xl p-5 bg-[#f6e8ce] drop-shadow-xl outline-4 outline-dashed outline-[#E3C380]" >
               <h1 className="text-3xl">✨ Мои мечты</h1>

               <p className="pt-2 font-bold" >Мои планы на будущее</p>
               <textarea name="q21" placeholder={page.q21} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white disabled " />

               <p className="pt-2">Я хочу стать</p>
               <textarea name="q22" placeholder={page.q22} className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white" disabled />

               <p className="pt-2">Парень моей мечты</p>
               <textarea name="q23" placeholder={page.q23} className="block w-full min-h-[40px] h-[60px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white" disabled />
     
               <p className="pt-2">Страны в которых хочу побывать</p>
               <textarea name="q24" placeholder={page.q24} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white" disabled />

               <p className="pt-2">Звезда с которой я хочу встретится</p>
               <textarea name="q25" placeholder={page.q25} className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white" disabled />

               <p className="pt-2">А еще я хочу </p>
               <textarea name="q26" placeholder={page.q26} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] bg-white" disabled />



           </div>


           <p className="pt-2">Пожелание хозяйки анкеты</p>
           <textarea name="q27" placeholder={page.q27} className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#EA763D] bg-white" disabled />

           
 


  
   </form>

   </div>

    )
}



{/* <p className="pt-2 font-bold" >Как тебя зовут?</p>
<textarea placeholder={page.q1} className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0] bg-white" disabled/> */}
