'use server'

import mongoose from "mongoose"
import { model, models, Schema } from "mongoose"
import { Page } from "@/models/page"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function grabUsername(formData) {
    const username = formData.get('username')

    mongoose.connect(process.env.MONGODB_URI)
    const existingPages = await Page.findOne({ uri: username })


    if (existingPages) {
        return false
    } else{
        const session = await getServerSession(authOptions)

        await Page.create({
            uri: username, 
            owner: session?.user?.email,
        })
        redirect('/account/?created=' + formData.get('username'))
    }


}