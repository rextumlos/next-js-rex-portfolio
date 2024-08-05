import {sendMail} from "@/services/mailService";
import {NextResponse} from "next/server";

export async function POST(request) {
    const { firstname, lastname, email, phone, service, message } = await request.json()
    try {
        const subject = `Portfolio | ${firstname} ${lastname} | ${service} | ${email} | ${phone}`

        await sendMail(subject, email, message)
        return new NextResponse(JSON.stringify({message: "Success!"}))
    } catch (err) {
        return new NextResponse(JSON.stringify({error: `Error: ${err}`}))
    }
}