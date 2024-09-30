'use client'

import grabUsername from "@/actions/grabUsername"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function UsernameForm(){

    const [taken, setTaken] = useState(false)
    async function handleSubmit(formData) {
        
        const result = await grabUsername(formData)
        setTaken(result === false)
        // if (result){
        //     redirect('/account/' + formData.get('username'))
        // }
    }

    return(
        <div className="flex items-center justify-center h-screen">


        <div className="flex flex-col items-center gap-5 text-center rounded-3xl p-5 bg-[#f6e8ce] drop-shadow-xl outline-4 outline-dashed outline-[#E3C380] ">

             <h1 className="text-3xl">Pick your username</h1>
        <form action={handleSubmit}>
        <input name="username" type="text" placeholder="username" className="text-black" />
        {taken && (
             <div className="bg-red-500 rounded-full text-white p-2 my-2">The username is taken</div>
        )}

        <button className="bg-[#EFAE8B] border-2 border-[#ED7844] text-white rounded-full p-2  text-lg cursor-pointer hover:bg-[#ED7844] w-20">Get</button>
        </form>
        </div>
        </div>
    )
}