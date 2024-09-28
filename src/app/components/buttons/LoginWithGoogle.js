'use client'
import { signIn, signOut, useSession } from "next-auth/react"


export default function LoginWithGoogle(){

    return(
        <>
        <button 
        onClick={() => signIn('google')}
        className="bg-[#EFAE8B] border-2 border-[#ED7844] text-white rounded-full p-2  text-lg cursor-pointer hover:bg-[#ED7844]">
        Sign In with Google
        </button>





    </>
    )
}