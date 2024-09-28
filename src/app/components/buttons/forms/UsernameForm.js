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
        <>
             <h2>Pick your username</h2>
        <form action={handleSubmit}>
        <input name="username" type="text" placeholder="username" className="text-black" />
        {taken && (
             <div className="bg-red-500 p-2">The username is taken</div>
        )}

        <button>Get</button>
        </form>
        </>
    )
}