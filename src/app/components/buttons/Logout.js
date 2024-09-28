'use client'
import { signIn, signOut, useSession } from "next-auth/react"


export default function Logout(){

    return(
        <>
        <button
        onClick={() => signOut()}
        className="text-blue-500">
        Log out
        </button>





    </>
    )
}