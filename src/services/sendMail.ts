import nodemailer from "nodemailer"

interface IMailInformation{
    to:string,
    subject:string,
    html:string
}

const sendMail=async(mailInformation:IMailInformation)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.NODEMAILER_EMAIL,
            pass:process.env.NODEMAILER_PASSWORD
        }
    })

    const mailFormat={
        from:"ABC School Private Limited",
        to:mailInformation.to,
        subject:mailInformation.subject,
        html:mailInformation.html
    }

    try {
        await transporter.sendMail(mailFormat)
    } catch (error) {
        console.log(error)
    }
}

export default sendMail