'use client';

import Image from "next/image";
import SubmitButton from "../SubmitButton";
import Link from "next/link";
import { useState } from "react";
import { set } from "mongoose";
import { signIn, signOut, useSession } from "next-auth/react"
import { savePageSettings } from "@/actions/savePageSettings";


export default function UserPageEdit({ page, user }) {


    const [avatar, setAvatar] = useState(user?.image)

    // const session = await getServerSession(authOptions)

    async function saveBaseSettings(formData) {
        console.log(formData.get('bio'))
        const result = await savePageSettings(formData)
        console.log({ result })
    }


    async function upload(ev, callbackFn) {

        const file = ev.target.files?.[0]
        if (file) {

            const uploadPromise = new Promise((resolve, reject) => {
                const data = new FormData
                data.set('file', file)
                fetch('/api/upload', {
                    method: 'POST',
                    body: data,
                }).then(response => {
                    if (response.ok) {
                    response.json().then(link => {
                        callbackFn(link)
                        resolve(link)
                    })
                } else {
                    reject()
                }
            })

        })
    }
}

async function handleAvatarImageChange(ev) {
    await upload(ev, link => {
        setAvatar(link)
    })
}

// function handleFileChange(ev) {
//     const file = ev.target.files?.[0]
//     if (file) {
//         const data = new FormData
//         data.set('file', file)
//         fetch('/api/upload', {
//             method: 'POST',
//             body: data,
//         }).then(response => {
//             response.json().then(link =>{
//                 console.log(link)
//             })
//         })
//     }
// }

return (
    <div>
 
     
     
       <div >

        <form action={saveBaseSettings} className="flex flex-col items-center max-w-md mx-auto gap-7 pt-5">

        <h1>🐶 Cutiequiz.com</h1>


<Image
    className="rounded-full outline-dashed outline-offset-4 outline-4 outline-[#DA9966]"
    src={avatar}
    alt={"avatar"}
    width={150}
    height={150}
/>

            <div>

                <label className="bg-[#EFAE8B] border-2 border-[#ED7844] text-white rounded-full p-2  text-lg cursor-pointer hover:bg-[#ED7844]">
                    <input type="file" onChange={handleAvatarImageChange} className="hidden" />
                    📷 Аватарка</label>
                    <input type="hidden" name="avatar" value={avatar} />
            </div>

           <div className=" text-center">
            <h1 className="font-bold text-3xl text-[#DA9966] pb-2">Редактирование анкеты</h1> 
           {/* <input name="username" defaultValue={user?.name} type="text" placeholder="" className="font-bold text-3xl text-white bg-[#D57CE8] rounded-3xl p-2 text-center"></input> */}
        
                <Link
                    target="_blank"
                    href={'/' + page.uri}
                    className="text-[#4B74B5] font-bold"
                >
                    {page && (
                        <span>🔗 Посмотреть анкету </span>
                    )}
                </Link>
            </div>

            {/* <div className="w-full">
                <textarea className="block w-full h-[150px] border-none outline-dashed outline-4 outline-[#D57CE8] bg-[#E188F2] rounded-3xl p-2 text-white font-bold text-center outline-none overflow-hidden" name="bio" defaultValue={page.bio} />
            </div> */}




        
     

                {/* <div className="w-1/2 bg-slate-100 rounded-xl p-5 mb-5" >

                    <h1 className="font-bold" >Кратко о тебе</h1>
                    <textarea className="w-full block" name="bio" defaultValue={page.bio} />
                </div> */}

                <div className="w-full rounded-3xl p-5 bg-[#F8E7E8] drop-shadow-xl outline-4 outline-dashed outline-[#E9A5B0]" >
                    <h1 className="text-3xl">😉 Основное</h1>

                    <p className="pt-2 font-bold" >Как тебя зовут?</p>
                    <textarea name="q1" defaultValue={page.q1} placeholder="" className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0]" />

                    <p className="pt-2">Дата рождения</p>
                    <textarea name="q2" defaultValue={page.q2} placeholder="" className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl-full focus:border-[#E9A5B0]" />

                    <p className="pt-2">Знак зодиака</p>
                    <textarea name="q3" defaultValue={page.q3} placeholder="" className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0]" />
          
                    <p className="pt-2">Мои странички в Интернете</p>
                    <textarea name="q4" defaultValue={page.q4} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#E9A5B0]" />

                </div>

                <div className="w-full rounded-3xl p-5 bg-[#CFE4FF] drop-shadow-xl outline-4 outline-dashed outline-[#4A74AB]" >
                    <h1 className="text-3xl">👑 Еще немного обо мне</h1>

                    <p className="pt-2 font-bold" >Меня можно описать тремя словами</p>
                    <textarea name="q5" defaultValue={page.q5} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />

                    <p className="pt-2">Я люблю носить</p>
                    <textarea name="q6" defaultValue={page.q6} placeholder="" className="block w-full min-h-[60px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />

                    <p className="pt-2">🎤 Мое хобби это</p>
                    <textarea name="q7" defaultValue={page.q7} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
          
                    <p className="pt-2">😥 Мне грустно, когда</p>
                    <textarea name="q8" defaultValue={page.q8} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
          
                    <p className="pt-2">Если бы я могла иметь суперсилу, то это была бы...</p>
                    <textarea name="q9" defaultValue={page.q9} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
     
                    <p className="pt-2">🎁 Самый лучший подарок для меня это</p>
                    <textarea name="q10" defaultValue={page.q10} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
          
                    <p className="pt-2">Я ценю в людях</p>
                    <textarea name="q11" defaultValue={page.q11} placeholder="" className="block w-full min-h-[40px] h-[60px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
          
                    <p className="pt-2">💅🏿 Мои подруги  </p>
                    <textarea name="q12" defaultValue={page.q12} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB] " />
 
                    <p className="pt-2">🔓 Мои секреты</p>
                    <textarea name="q13" defaultValue={page.q13} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#4A74AB]" />

                </div>

                <div className="w-full rounded-3xl p-5 bg-[#EAF0E9] drop-shadow-xl outline-4 outline-dashed outline-[#C9D1B8]" >
                    <h1 className="text-3xl">🐶 Мои интересы</h1>

                    <p className="pt-2 font-bold" >В свободное время я люблю</p>
                    <textarea name="q14" defaultValue={page.q14} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />

                    <p className="pt-2">Моя любимая музыка</p>
                    <textarea name="q15" defaultValue={page.q15} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F] " />

                    <p className="pt-2">Мои любимые фильмы</p>
                    <textarea name="q16" defaultValue={page.q16} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />
          
                    <p className="pt-2">Мои любимые книги</p>
                    <textarea name="q17" defaultValue={page.q17} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />

                    <p className="pt-2">Моя любимая еда</p>
                    <textarea name="q18" defaultValue={page.q18} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />

                    <p className="pt-2">Мой любимый праздник</p>
                    <textarea name="q19" defaultValue={page.q19} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />
     
                    <p className="pt-2">Мое любимое животное</p>
                    <textarea name="q20" defaultValue={page.q20} placeholder="Собачки или кошки?" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#A5AF8F]" />



                </div>

                <div className="w-full rounded-3xl p-5 bg-[#f6e8ce] drop-shadow-xl outline-4 outline-dashed outline-[#E3C380]" >
                    <h1 className="text-3xl">✨ Мои мечты</h1>

                    <p className="pt-2 font-bold" >Мои планы на будущее</p>
                    <textarea name="q21" defaultValue={page.q21} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380] " />

                    <p className="pt-2">Я хочу стать</p>
                    <textarea name="q22" defaultValue={page.q22} placeholder="" className="block w-3/4 min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380]" />

                    <p className="pt-2">Парень моей мечты</p>
                    <textarea name="q23" defaultValue={page.q23} placeholder="" className="block w-full min-h-[40px] h-[60px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380]" />
          
                    <p className="pt-2">Страны в которых хочу побывать</p>
                    <textarea name="q24" defaultValue={page.q24} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380]" />

                    <p className="pt-2">Звезда с которой я хочу встретится</p>
                    <textarea name="q25" defaultValue={page.q25} placeholder="" className="block w-full min-h-[40px] h-[40px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380]" />

                    <p className="pt-2">А еще я хочу </p>
                    <textarea name="q26" defaultValue={page.q26} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#E3C380]" />



                </div>

 
                <p className="pt-2">Пожелание хозяйки анкеты</p>
                <textarea name="q27" defaultValue={page.q27} placeholder="" className="block w-full min-h-[40px] h-[80px] outline-none overflow-hidden rounded-3xl focus:border-[#EA763D]" />

                <div ><SubmitButton>✍ Cохранить</SubmitButton></div>
                
      
                <button 
        onClick={() => signOut()}
        className="text-[#989798] pb-10">
        Log out
        </button>

       
        </form>

        </div>



    </div>
)
}