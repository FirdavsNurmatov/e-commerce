import nodemailer from "nodemailer"
import {logger} from "./src/utils/logger.js"
import {otp} from "./otp.js"

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: "toxirmalk@gmail.com",
        pass: "jksj zogm yzpo dkcp"
    }
})
const sendmail=async()=>{
    transport.sendMail(
        {
        from:"toxirmalk@gmail.com",
        to:"abulfarah07@gmail.com",
        subject:`Siznig otp passwordingiz ${otp}`,
        text:"Salom Dunyo",
        },
        function(error,info){
            if(error){
                logger.error(error)
            }else{
                logger.info("Sms jo'natildi "+info.response)
            }
        }
    )
}

await sendmail()