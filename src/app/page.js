import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {

const session = await getServerSession(authOptions)
const user = session?.user

// add a check to see if the account has a nickname or not
if (user){
  redirect('/account/')
}

  return (
    <div className="flex items-center justify-center h-screen">


<div className="flex flex-col items-center gap-5 text-center rounded-3xl p-5 bg-[#f6e8ce] drop-shadow-xl outline-4 outline-dashed outline-[#E3C380] ">
    <div><h1 className="text-3xl">CutieQuiz.com</h1></div>
    <div><h2 className="text-xl w-96 text-center">Answer questions about yourself and share it with your friends</h2></div>

 <Link className="bg-[#EFAE8B] border-2 border-[#ED7844] text-white rounded-full p-2  text-lg cursor-pointer hover:bg-[#ED7844] w-44" href="/login">Go to Login Page</Link>

 </div>
 </div>
  )
}
