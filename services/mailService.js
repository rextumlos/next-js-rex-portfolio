import nodemailer from "nodemailer"
import 'dotenv/config'

export async function sendMail(subject, fromEmail, otpText) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    const mailOptions = {
        from: fromEmail,
        to: process.env.NODEMAILER_EMAIL,
        subject: subject,
        text: otpText,
    };

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}